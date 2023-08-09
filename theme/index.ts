import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: "Poppins",
  },
  breakpoints: {
    values: {
      xl: 1600,
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "0px",
        }
      },
    }
  }
});

export { theme };
