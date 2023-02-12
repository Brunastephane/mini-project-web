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
          //color: "#F9F5E7",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h5: {
          //color: "#F9F5E7 !important"
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          color: "#F9F5E7 ",
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
      light: "#F9F5E7",
      main: "#ffd8d8",
      dark: "#ffa5a5",
    },
    secondary: {
      light: "#F9F5E7",
      main: "#493e57",
      dark: "#302939",
    },
  },
});

export default DefaultTheme;
