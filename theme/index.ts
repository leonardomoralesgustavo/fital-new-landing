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
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "h1" },
          style: ({ theme }) => ({
            fontSize: "60px",
            fontWeight: "700",
            [theme.breakpoints.between("lg", "xl")]: {
              fontSize: "55px",
            },
            [theme.breakpoints.between("md", "lg")]: {
              fontSize: "50px",
            },
            [theme.breakpoints.between("xs", "md")]: {
              fontSize: "40px",
            },
          }),
        },
        {
          props: { variant: "h2" },
          style: ({ theme }) => ({
            fontSize: "30px",
            fontWeight: "500",
            [theme.breakpoints.between("md", "lg")]: {
              fontSize: "26px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "22px",
            },
          }),
        },
        {
          props: { variant: "body1" },
          style({ theme }) {
            return {
              fontSize: "16px",
              fontWeight: "300",
              [theme.breakpoints.down("md")]: {
                fontSize: "14px",
              },
            };
          },
        },
        {
          props: { variant: "body2" },
          style({ theme }) {
            return {
              fontSize: "35px",
              fontWeight: "500",
              [theme.breakpoints.between("lg", "xl")]: {
                fontSize: "28px",
              },
              [theme.breakpoints.between("md", "lg")]: {
                fontSize: "23px",
              },
              [theme.breakpoints.between("xs", "md")]: {
                fontSize: "18px",
              },
            };
          },
        },
      ],
    },
  },
});

export { theme };
