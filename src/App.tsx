import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet } from "react-router";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />   
    </ThemeProvider>
  );
}
