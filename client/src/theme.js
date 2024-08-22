import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0c5eb0",
    },
    secondary: {
      main: "#FF5722",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
});

export default theme;
