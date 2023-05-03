import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Box} from "@mui/material";
import Navbar from "@/scenes/navbar";
import  Dashboard from "@/scenes/dashboard";
import Acu from "@/scenes/acu";





function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
  <div className="app"style={{ display: "flex", height: "100%" }}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box width="100%"  padding="2rem 2rem" style={{ flex: 0.5 }}>
          <Navbar/>
        </Box>
        <Box width="100%" padding="1rem 2rem 4rem 2rem" style={{ flex: 4 }}>
          <Routes>  
            <Route path="/" element={<Dashboard/>} />
            <Route path="/acu" element={<Acu/>} />
          </Routes>
        </Box>  
      </ThemeProvider>
    </BrowserRouter>
  </div>
  );
}

export default App;