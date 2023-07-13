import DashboardBox from '@/components/DashboardBox'
import { useGetAcuVoltagesQuery } from '@/state/api';
import socket from '@/state/socket';
import { useState, useEffect } from 'react';
import BoxHeader from '@/components/BoxHeader';
import CustomLineChart from '@/components/CustomLineChart';
import PhasorsGraph from '@/components/PhasorsGraph';
import {Typography, Box, useTheme} from "@mui/material";



type Props = {}



const GraphsDashboard = (props: Props) => {

  const {palette} = useTheme();
  
  const {data} = useGetAcuVoltagesQuery();
  console.log('data:', data);
  const chartData = data?.map(item => ({
    time: item.time,
    voltage: item.voltage,
  }));


  const angles = [0, 119.86, 240.36];
  const angles2 = [26.2, 161.86, 240.36];
  


  return (
    <>
    <DashboardBox gridArea="a">
      <BoxHeader
              title="Voltaje Circuitor"
            />
      <Box sx={{display:"flex",
                justifyContent:"flex-end",
                alignItems: "center",
                height:"6vh"
                }}>
        <Typography m="1rem" color={palette.primary[100]} fontSize="50px" fontWeight= "bold">
              120 V
        </Typography>
      </Box>
    </DashboardBox>
    <DashboardBox gridArea="b">
    <BoxHeader
            title="Corriente Circuitor"
          />
        <Box sx={{display:"flex",
                justifyContent:"flex-end",
                alignItems: "center",
                height:"6vh"
                }}>
        <Typography m="1rem" color={palette.secondary[100]} fontSize="50px" fontWeight= "bold">
              10 A
        </Typography>
      </Box>
    </DashboardBox>
    <DashboardBox gridArea="c">
    <BoxHeader
            title="Potencia Activa Circuitor"
          />
        <Box sx={{display:"flex",
                justifyContent:"flex-end",
                alignItems: "center",
                height:"6vh"
                }}>
          <Typography m="1rem" color={palette.tertiary[100]} fontSize="50px" fontWeight= "bold">
                1 KW
          </Typography>
        </Box>
    </DashboardBox>
    <DashboardBox gridArea="d">
      <BoxHeader
            title="Voltaje ACU"
            sideText="Volts"
          />
    <CustomLineChart 
          chartData={chartData}
          xAsisDatakey='time'
          yAsisDatakey='voltage'
          stroke = {palette.primary[100]}/>
    </DashboardBox>

    <DashboardBox gridArea="e">
      <PhasorsGraph angles={angles} angles2={angles2}/>
    </DashboardBox> 

    <DashboardBox gridArea="f">
    <BoxHeader
            title="Corriente ACU"
            sideText="Amps"
          />
    <CustomLineChart 
          chartData={chartData}
          xAsisDatakey='time'
          yAsisDatakey='voltage'
          stroke = {palette.secondary[100]}/>
    </DashboardBox>
    
    </>
  )
} 

export default GraphsDashboard;
