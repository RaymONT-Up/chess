import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import "./styles/vars/globals.scss";
import { Header } from "src/widgets/Header";
import { AppRouter } from "./router";

export const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <ThemeProvider theme={theme}>
      <Header darkMode={darkMode} toggleDarkMode={toggleTheme} loggedIn />
      <AppRouter />
    </ThemeProvider>
  );
};
