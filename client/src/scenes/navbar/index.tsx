import SolarPowerIcon from '@mui/icons-material/SolarPower';
import { Box, Typography, useTheme} from '@mui/material';
import FlexBetween from '@/components/FlexBetween';
import { DropDownItem} from '@/components/DropDownData';
import SubMenu from '@/components/SubMenu';



type Props = {}

const Navbar = (props: Props) => {
    const {palette} = useTheme();

  return( 
    <FlexBetween mb="0rem" p="0.5rem 0rem" color={palette.grey[300]}>
        {/* Left Side */}
                <Box sx={{ display: "inline-flex", alignItems: "center" }}>
                    <SolarPowerIcon sx={{ fontSize: "30px"}}/>
                    <Typography variant="h4" sx={{ fontSize: "30px", marginLeft: "10px" }}>
                        GPOT
                    </Typography>
                </Box>

            <FlexBetween p="0rem 1rem 0rem 1rem" >
                    <Box sx={{position: "relative", left: 0}}>
                        {DropDownItem.map((item, index) => {
                            return <SubMenu item={item} key={index}/>
                        })} 
                    </Box>                
            </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar