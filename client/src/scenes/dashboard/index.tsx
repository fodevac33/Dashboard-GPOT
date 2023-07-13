import {useMediaQuery} from '@mui/material'
import GraphsDashboard from './GraphsDashboard';
import BoxTemplateGrid from '@/components/BoxTemplateGrid';

const gridTemplateLargeScreens = `
  "a a b b c c"
  "d d d e e e"
  "d d d e e e"
  "f f f e e e"
  "f f f e e e"
`;

const gridTemplateSmallScreens= `
  "a"
  "a"
  "b"
  "b"
  "c"
  "c"
  "d"
  "d"
  "d"
  "d"
  "d"
  "d"
  "e"
  "e"
  "e"
  "e"
  "e"
  "e"
  "e"
  "e"
  "e"
  "e"
  "e"
  "e"
  "f"
  "f"
  "f"
  "f"
  "f"
  "f"

`;

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
    return (
      <BoxTemplateGrid isAboveMediumScreens={isAboveMediumScreens} 
      gridTemplateLargeScreens={gridTemplateLargeScreens} 
      gridTemplateSmallScreens={gridTemplateSmallScreens}
      columns={6} rows={5}
      sizeColumns='150px' sizeRows='60px'>
        <GraphsDashboard/>  
      </BoxTemplateGrid>
    )
}

export default Dashboard;