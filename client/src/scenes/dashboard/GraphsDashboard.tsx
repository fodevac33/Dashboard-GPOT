import DashboardBox from '@/components/DashboardBox'
import { useGetAcuVoltagesQuery } from '@/state/api';
import socket from '@/state/socket';
import { useState, useEffect } from 'react';
import BoxHeader from '@/components/BoxHeader';
import CustomLineChart from '@/components/CustomLineChart';
import PhasorsGraph from '@/components/PhasorsGraph';
import {Typography, Box} from "@mui/material";



type Props = {}



const GraphsDashboard = (props: Props) => {
  const {data} = useGetAcuVoltagesQuery();
  console.log('data:', data);
  const chartData = data?.map(item => ({
    time: item.time,
    voltage: item.voltage,
  }));

  const [dataRealTimeVoltage, setDataVoltage] = useState([]);

  useEffect(() => {
    socket.on('dataRealTimeVoltage', (dataRealTimeVoltage) => {
      setDataVoltage(dataRealTimeVoltage);
      console.log("dataRealTimeVoltage:", dataRealTimeVoltage);
    });
  }, []);

  const [dataRealTimeCurrent, setDataCurrent] = useState([]);

  useEffect(() => {
    socket.on('dataRealTimeCurrent', (dataRealTimeCurrent) => {
      setDataCurrent(dataRealTimeCurrent);
      console.log("dataRealTimeCurrent:", dataRealTimeCurrent);
    });
  }, []);

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
                height:"70%"
                }}>
        <Typography m="1rem" color="#D93D04" fontSize="50px" fontWeight= "bold">
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
                height:"70%"
                }}>
        <Typography m="1rem" color="#4FDC04" fontSize="50px" fontWeight= "bold">
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
                height:"70%"
                }}>
          <Typography m="1rem" color="#3498DB" fontSize="50px" fontWeight= "bold">
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
          stroke = '#D93D04'/>
    </DashboardBox>

    <DashboardBox gridArea="e">
      <PhasorsGraph angles={angles} angles2={angles2}/>
    </DashboardBox> 

    <DashboardBox gridArea="f">
    <BoxHeader
            title="Voltaje ACU"
            sideText="Volts"
          />
    <CustomLineChart 
          chartData={chartData}
          xAsisDatakey='time'
          yAsisDatakey='voltage'
          stroke = '#98D936'/>
    </DashboardBox>
    
    </>
  )
} 

export default GraphsDashboard;
