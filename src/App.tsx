import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet } from "react-router";
import BackToTop from "./components/BackToTop";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BackToTop/>
      <Outlet />   
    </ThemeProvider>
  );
}
