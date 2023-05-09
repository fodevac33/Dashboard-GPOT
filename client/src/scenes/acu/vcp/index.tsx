import { Box, useMediaQuery} from '@mui/material'
import GraphsVCP from './GraphsVCP';

const gridTemplateLargeScreens = `
    "a b"
    "a b"
    "a b"
    "a b"
    "c c"
    "c c"
    "c c"
    "c c"
`;

const gridTemplateSmallScreens= `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "c"
`;

const GridACUVCP = () => {
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
          gridTemplateColumns: "repeat(2, minmax(370px, 1fr))",
          gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
          gridTemplateAreas: gridTemplateLargeScreens,
          } : {
            gridAutoColumns: "1fr",
            gridAutoRows: "80px",
            gridTemplateAreas: gridTemplateSmallScreens,
            maxWidth: "90px",
          }
        }
      >
        <GraphsVCP/>
      
      </Box>
    )

}

export default GridACUVCP;