import { Outlet } from "react-router";
import Box from "@mui/material/Box";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LandingLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <Box sx={{ flex: 1 }}>
        <Outlet />  
      </Box>

      <Footer />
    </Box>
  );
}
