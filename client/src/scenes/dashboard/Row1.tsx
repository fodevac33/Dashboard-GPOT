import DashboardBox from '@/components/DashboardBox'
import { useGetAQVoltagesQuery } from '@/state/api';
import { CartesianGrid, Legend, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line} from 'recharts';


type Props = {}

const Row1 = (props: Props) => {
  const {data} = useGetAQVoltagesQuery();
  console.log('data:', data);
  const chartData = data?.map(item => ({
    time: item.time,
    voltage: item.voltage,
  }));
    
  return (
    <>
    <DashboardBox gridArea="a">
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            left: -25,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="voltage" stroke="#8884d8" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
    <DashboardBox gridArea="b"></DashboardBox>
    <DashboardBox gridArea="c"></DashboardBox>
    </>
  )
} 

export default Row1