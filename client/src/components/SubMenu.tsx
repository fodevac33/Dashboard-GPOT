import React, { useState} from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import {Box,Typography, useTheme} from '@mui/material';
import { DropDownItem} from '@/components/DropDownData';
import { useLocation } from "react-router-dom";

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  padding-top: 3rem;
  list-style: none;
  height: 20px;
  text-decoration: none; 
  justify-content: space-between;
`;

const DropDownLink = styled(Link)`
    height: 40px;
    padding-left: 1rem;
    paddig-bottom: 0rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 30px;
`;


const SubMenu = ({ item}: { item: DropDownItem }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
    const {palette} = useTheme();
    const { pathname } = useLocation();
    console.log("pathname:" + pathname);
    console.log("item.path:" + item.path);
    
    return (
      <>
      <SidebarLink to={item.path}
      onClick={item.subnav && showSubnav}
      style={{ color: pathname === item.path || (item.title === "Acu" && pathname.startsWith("/acu")) || (item.title === "Circuitor" && pathname.startsWith("/circuitor")) ? "white": palette.grey[700] }}>
        <Box sx={{ display: "flex", alignItems: "center"}}>
          {item.icon}
          <Typography variant='h2' sx={{ fontSize: "18px", marginLeft: "12px"}}>
            {item.title}
          </Typography>
        </Box>
        <Box sx={{alignItems:"center", marginLeft:"1rem"}}>
          {item.subnav && subnav
            ? item.iconOpened
            : item.subnav
            ? item.iconClosed
            : null}
        </Box>
      </SidebarLink>
      {item.subnav && subnav && 
        item.subnav.map((item, index) => {
          return (
            <DropDownLink to={item.path} key={index} style= {{color: pathname === item.path ? "white": palette.grey[700]}}>
              <Box sx={{ display: "flex", alignItems: "center", marginTop: "2rem"}}>
                {item.icon }
                <Typography sx={{marginLeft:"1rem"}}>{item.title}</Typography>
              </Box>
            </DropDownLink>
          );
        })}
      </>
    )
  }

export default SubMenu;
