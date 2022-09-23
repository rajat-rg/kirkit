import { Container, Stack, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import MatchDetail from "./pages/MatchDetail";
import News from "./pages/News";

function App() {
  return (
    <>
      <Navbar />
      <Stack direction="row">
        <Sidebar />
        <Container
          sx={{
            minWidth: { xs: "99vw", sm: "80vw", md: "50vw" },
            marginTop: "20px",
            marginX: "0",
            padding: "0",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/news/:type/:id" element={<News />}></Route>
            <Route path="/match/:matchId" element={<MatchDetail />}></Route>
          </Routes>
        </Container>

        <Typography
          variant="h3"
          sx={{
            maxWidth: "30vw",
            width: { sm: "0vw", md: "30vw" },
            display: { xs: "none", md: "block", background: "#1A1717" },
          }}
          color="text.primary"
        >
          galarry
        </Typography>
      </Stack>
    </>
  );
}

export default App;
