import { Box, useMediaQuery} from '@mui/material'
import GraphsEnergies from './GraphsEnergies';

const gridTemplateLargeScreens = `
    "a b"
    "a b"
    "a b"
    "a b"
    "c d"
    "c d"
    "c d"
    "c d"
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
  "d"
  "d"
  "d"
  "d"
`;

const GridACUEnergies = () => {
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
        <GraphsEnergies/>
      
      </Box>
    )

}

export default GridACUEnergies;