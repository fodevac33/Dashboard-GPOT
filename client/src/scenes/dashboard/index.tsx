import { Box, useMediaQuery} from '@mui/material'
import GraphsDashboard from './GraphsDashboard';

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
      <Box
        width="100%"
        height="100%"
        display="grid"
        gap="1.5rem"
        p= "1rem"
        sx = {
          isAboveMediumScreens ?{
          gridTemplateColumns: "repeat(6, minmax(150px, 1fr))",
          gridTemplateRows: "repeat(5, minmax(60px, 1fr))",
          gridTemplateAreas: gridTemplateLargeScreens,
          } : {
            gridAutoColumns: "1fr",
            gridAutoRows: "80px",
            gridTemplateAreas: gridTemplateSmallScreens,
            maxWidth: "90px",
          }
        }
      >
        <GraphsDashboard/>
      
      </Box>
    )
}

export default Dashboard;