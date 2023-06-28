import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Box} from "@mui/material";
import Navbar from "@/scenes/navbar";
import  Dashboard from "@/scenes/dashboard";
import GridACUVCP from "./scenes/acu/vcp";
import GridACUEnergies from "./scenes/acu/energies";
import GridCircuitorVCP from "./scenes/circuitor/vcp";
import GridCircuitorFasores from "./scenes/circuitor/fasores";





function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
  <div className="app"style={{ display: "flex", height: "100%" }}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box width="100%"  padding="2rem 0rem 0rem 2rem" style={{ flex: 0.5 }}>
          <Navbar/>
        </Box>
        <Box width="100%" padding="1rem 1rem 0rem 0rem" style={{ flex: 4 }}>
          <Routes>  
            <Route path="/" element={<Dashboard/>} />
            <Route path="/acu/vcp" element={<GridACUVCP/>} />
            <Route path="/acu/energies" element={<GridACUEnergies/>} />
            <Route path="/circuitor/vcp" element={<GridCircuitorVCP/>} />
            <Route path="/circuitor/fasores" element={<GridCircuitorFasores/>} />
          </Routes>
        </Box>  
      </ThemeProvider>
    </BrowserRouter>
  </div>
  );
}

export default App;
