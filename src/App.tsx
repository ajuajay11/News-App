import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet } from "react-router";
import BackToTop from "./components/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css"; // Add this import for AOS styles
import { useEffect } from "react";
const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

export default function App() {
  useEffect(() => {
     setTimeout(() => {
      AOS.init({ 
        duration: 1000,
        once: false,  
        mirror: false, 
      });
    }, 100);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <BackToTop/>
      <Outlet />   
    </ThemeProvider>
  );
}
