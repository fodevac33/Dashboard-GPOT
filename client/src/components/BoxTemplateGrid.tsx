import React from 'react'
import { Box} from "@mui/material";

type Props = {
    isAboveMediumScreens: boolean,
    gridTemplateLargeScreens: string,
    gridTemplateSmallScreens: string,
    children: React.ReactNode,
    columns?: number,
    rows?: number,
    sizeColumns?: string,
    sizeRows?: string
}

const BoxTemplateGrid = ({isAboveMediumScreens, 
    gridTemplateLargeScreens,
    gridTemplateSmallScreens,
    children, 
    columns = 2,
    rows = 2,
    sizeColumns = "370px",
    sizeRows = "58px"}: Props) => {
  return (
    <Box
        width="100%"
        height="100%"
        display="grid"
        gap="1.5rem"
        p= "1rem"
        sx = {
          isAboveMediumScreens ?{
          gridTemplateColumns: `repeat(${columns}, minmax(${sizeColumns}, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(${sizeRows}, 40vh))`,
          gridTemplateAreas: gridTemplateLargeScreens,
          } : {
            gridAutoColumns: "1fr",
            gridAutoRows: "500px",
            gridTemplateAreas: gridTemplateSmallScreens,
            maxWidth: "90px",
          }
        }
      >
        {children}
    </Box>
  )
}

export default BoxTemplateGrid;