import React, {useMemo} from 'react'
import { useGetAcuVoltagesQuery } from '@/state/api';
import GraphEnergyPowerComponent from '@/components/GraphEnergyPowerComponent';

type Props = {}

  
const GraphsPowerL1 = (props: Props) => {

  const {data} = useGetAcuVoltagesQuery();
  console.log('data:', data);
  const chartData = useMemo(()=>{
    if(data){
        return data?.map(item => ({
            time: item.time,
            value: item.value,
        }));
    }
    return null;
  }, [data]);

  return (
    <>
      <GraphEnergyPowerComponent importedEnergyOrInductivePower={chartData}
      exportedEnergyOrCapacitivePower={chartData}
      netEnergyOrApparentPower={chartData}
      totalEnergyOrPowerFactor={chartData}
      device='Circuitor'
      titleAddition='- Linea 1'/>
  </>
  )
}

export default GraphsPowerL1;