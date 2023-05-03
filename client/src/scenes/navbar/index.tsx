import {useState} from 'react';
import { Link } from 'react-router-dom';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import { Box, Typography, useTheme} from '@mui/material';
import FlexBetween from '@/components/FlexBetween';
import HomeIcon from '@mui/icons-material/Home';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import DropDownMenu from '@/components/DropDownMenu'

type Props = {}

const Navbar = (props: Props) => {
    const {palette} = useTheme();
    const [selected, setSelected] = useState("dashboard");
    const [open, setOpen] = useState(false);
  return( 
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
        {/* Left Side */}
            <FlexBetween gap= "0.75rem">
                <Box sx={{ display: "inline-flex", alignItems: "center" }}>
                    <SolarPowerIcon sx={{ fontSize: "30px"}}/>
                    <Typography variant="h4" sx={{ fontSize: "30px", marginLeft: "10px" }}>
                        GPOT
                    </Typography>
                </Box>
    </FlexBetween>

            {/* Rigth Side */}
            <FlexBetween gap="2rem" p="2rem 1rem 2rem 1.2rem" >
                <Box sx={{ "&:hover": { color: palette.primary[100] }}}>
                    <Link 
                        to="/"
                        onClick={() => setSelected("dashboard")} 
                        style={{ 
                            color: selected ==="dashboard" ? "inherit": palette.grey[700],
                            textDecoration: "inherit", display:"flex", alignItems: "center"}}>
                    <HomeIcon sx={{ fontSize: "25px"}}/>
                    <Typography variant='h2' sx={{ fontSize: "15px", marginLeft: "10px"}}>
                        Inicio  
                    </Typography>            
                    </Link>
            </Box>
            
            <Box onClick={() => setOpen(!open)} sx={{ "&:hover": { color: palette.primary[100] }, display: "inline-flex", alignItems: "center"}}>
                {/* <Link 
                    to="/acu"
                    onClick={() => setSelected("acu")} 
                    style={{ 
                        color: selected ==="acu" ? "inherit": palette.grey[700],
                    textDecoration: "inherit",display:"flex", alignItems: "center"}}> 
                    </Link>}*/}
                        
                <OfflineBoltIcon sx={{ fontSize: "25px"}}/>
                    <Typography variant='h2' sx={{ fontSize: "15px", marginLeft: "10px"}}>
                        Acu
                    </Typography>                
                </Box>
            </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar