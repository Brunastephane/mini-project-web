import { createTheme } from "@mui/material";

const DefaultTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#493e57",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          //color: "#ffffff",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h5: {
          //color: "#ffffff !important"
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          color: "#ffffff ",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#302939",
        },
      },
    },
    MuiRating: {
      styleOverrides: {},
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffd8d8",
        },
      },
    },
  },
  palette: {
    background: {
      default: "#F9F5E7",
    },

    primary: {
      light: "#ffffff",
      main: "#ffd8d8",
      dark: "#ffa5a5",
    },
    secondary: {
      light: "#ffffff",
      main: "#493e57",
      dark: "#302939",
    },
  },
});

export default DefaultTheme;
