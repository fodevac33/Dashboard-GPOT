import React from 'react'
import { CartesianGrid, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line} from 'recharts';
import DashboardBox from '@/components/DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import { useGetAcuVoltagesQuery } from '@/state/api';


type Props = {}
  
const GraphsEnergies = (props: Props) => {

  const {data} = useGetAcuVoltagesQuery();
  console.log('data:', data);
  const chartData = data?.map(item => ({
    time: item.time,
    voltage: item.voltage,
  }));

  return (
    <>
      <DashboardBox gridArea="a">
      <BoxHeader
            title="Energía Importada"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor='#98D936'
          />
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={chartData}
          margin={{
            top: 15,
            right: 20,
            left: -25,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis/>
          <Tooltip/>
          <Line type="monotone" dataKey="voltage" stroke="#98D936" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>

    <DashboardBox gridArea="b">
      <BoxHeader
            title="Energía Exportada"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor='#4ABF2A'
          />
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={chartData}
          margin={{
            top: 15,
            right: 20,
            left: -25,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis/>
          <Tooltip/>
          <Line type="monotone" dataKey="voltage" stroke="#4ABF2A" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
      </DashboardBox>

    <DashboardBox gridArea="c">
      <BoxHeader
            title="Energía Neta"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor='#D7F205'
          />
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={chartData}
          margin={{
            top: 15,
            right: 20,
            left: -25,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis/>
          <Tooltip/>
          <Line type="monotone" dataKey="voltage" stroke="#D7F205" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea="d">
      <BoxHeader
            title="Energía Total"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor='#84D98A'
          />
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={chartData}
          margin={{
            top: 15,
            right: 20,
            left: -25,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis/>
          <Tooltip/>
          <Line type="monotone" dataKey="voltage" stroke="#84D98A" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
      </DashboardBox>

  </>
  )
}

export default GraphsEnergies;