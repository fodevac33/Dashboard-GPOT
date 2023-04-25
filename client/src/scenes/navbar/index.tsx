import {useState} from 'react';
import { Link } from 'react-router-dom';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import { Box, Typography, useTheme} from '@mui/material';
import FlexBetween from '@/components/FlexBetween';

type Props = {}

const Navbar = (props: Props) => {
    const {palette} = useTheme();
    const [selected, setSelected] = useState("dashboard");
  return( 
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
        {/* Left Side */}
        <FlexBetween gap= "0.75rem">
            <SolarPowerIcon sx={{ fontSize: "28px"}}/>
            <Typography variant="h4" fontSize="16px">
                GPOT
            </Typography>
        </FlexBetween>

        {/* Rigth Side */}
        <FlexBetween gap="2rem">
            <Box sx={{"&:hover": {color: palette.primary[100]}}}></Box>
            <Link 
                to="/"
                onClick={() => setSelected("dashboard")} 
                style={{ 
                    color: selected ==="dashboard" ? "inherit": palette.grey[700],
                     textDecoration: "inherit",}}> 
            Dashboard         
            </Link>
           
            <Box>
            <Link 
                to="/predictions"
                onClick={() => setSelected("predictions")} 
                style={{ 
                    color: selected ==="predictions" ? "inherit": palette.grey[700],
                     textDecoration: "inherit",}}> 
            Predictions
            </Link>
            
            </Box>
        </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar