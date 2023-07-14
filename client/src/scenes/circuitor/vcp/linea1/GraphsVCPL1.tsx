import React,{useMemo} from 'react'
import { useGetAcuVoltagesQuery } from '@/state/api';
import GraphVCPComponent from '@/components/GraphVCPComponent';

type Props = {}

  
const GraphsVCPL1 = (props: Props) => {

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
      <GraphVCPComponent dataVoltage={chartData}
     dataCurrent={chartData}
     dataPower={chartData}
     titleTime='- Linea 1'
     device='Circuitor'/>

  </>
  )
}

export default GraphsVCPL1;