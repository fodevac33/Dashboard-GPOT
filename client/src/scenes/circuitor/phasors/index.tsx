import React from 'react';
import {useMediaQuery} from '@mui/material'
import GraphPhasors from './GraphPhasors';
import GraphPhasorsT from './GraphPhasorsT';
import CustomPolarChart from './test';
import BoxTemplateGrid from '@/components/BoxTemplateGrid';
import FormControlTime from '@/components/FormControlTime';




const gridTemplateLargeScreens = `
    "a b"
    
`;

const gridTemplateSmallScreens= `
  "a"
  "b"
`;

const GridCircuitorFasores = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const [tiempo, setTiempo] = React.useState("Día");

    return (   
      <>
      <FormControlTime setTiempo={setTiempo} tiempo={tiempo} color={"#FFF"}/>
      <BoxTemplateGrid isAboveMediumScreens={isAboveMediumScreens} 
      gridTemplateLargeScreens={gridTemplateLargeScreens}
      gridTemplateSmallScreens={gridTemplateSmallScreens}
      columns={2} rows={1} sizeRows='80vh'>

        {tiempo === "Día" && <GraphPhasors/>}
        {tiempo === "Tiempo Real" && <GraphPhasorsT/>}
        {tiempo === "Semana" && <CustomPolarChart/>}     
      </BoxTemplateGrid>
      </> 
    )

}

export default GridCircuitorFasores;