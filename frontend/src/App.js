
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Stack, } from "@mui/material";
import Add from "./components/Add";
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';







function App() {
  
  const [mode, setMode] = useState("light");


   const darkTheme = createTheme ({
     palette:{
       mode: mode,
     },
   });
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar></Navbar>
    <Stack direction="row" spacing={2} justifyContent="space-between">
    <Sidebar setMode={setMode} mode={mode}></Sidebar>
    <Feed></Feed>
    <Rightbar></Rightbar>
    </Stack>
    <Add></Add>
    <Footer></Footer>

    </Box>
    
    </ThemeProvider>
  );
}

export default App;
