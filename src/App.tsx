import React from "react";
import Router from "./routes/Router";
import DefaultTheme from "./theme";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <>
      <ThemeProvider theme={DefaultTheme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
