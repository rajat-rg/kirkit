import { Box, Divider, Stack, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import News from "./pages/News";

function App() {
  return (
    <>
    <Navbar/>
    <Stack direction='row' spacing={1} divider={<Divider orientation="vertical" flexItem />}>
      <Sidebar />
      <Box sx={{minWidth:{xs:'100vw', md:'60vw'}}}>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/news" element={<News/>}></Route>
      </Routes>
      </Box>
    
    <Typography variant='h3' sx={{minWidth:'20vw', display:{xs:'none', md:'block'}}}>galarry</Typography>

    </Stack>
    </>
  );
}

export default App;
