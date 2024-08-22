import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import Game from "./pages/Game";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Dialog from "./components/Dialog";
import { shuffleArray } from "./utils/helpers/shuffleArray";
import { useDispatch, useSelector } from "react-redux";
import {
  setCountries,
  setDisplayDialog,
  setLeaderBoard,
  setName,
} from "./context/slice";

// MUI imports
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
  Paper,
} from "@mui/material";

/**
 * Custom MUI theme configuration for the application.
 * This theme customizes primary, secondary colors and typography.
 */
const theme = createTheme({
  palette: {
    primary: {
      main: "#0c5eb0", // Primary color
    },
    secondary: {
      main: "#FF5722", // Secondary color
    },
    background: {
      paper: "rgba(0, 0, 0, 0.4)", // Paper background color
    },
  },
  typography: {
    h3: {
      fontSize: "1.7rem",
      fontWeight: 1000,
      textAlign: "center",
      color: "white",
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 1000,
      textAlign: "center",
      color: "white",
    },
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      color: "#ffffff",
      textAlign: "center",
    },
    h6: {
      fontWeight: 400,
      color: "#ffffff",
    },
    h5: {
      fontSize: "1.3rem",
    },
  },
});

/**
 * Main application component.
 *
 * This component is responsible for rendering the main structure of the application,
 * including the navigation, theme setup, and routing between different pages.
 *
 * @component
 * @returns {JSX.Element} The main component rendering the game.
 */
function App() {
  const dispatch = useDispatch();
  const { displayDialog } = useSelector((state) => state.game);

  /**
   * Load the user's name from localStorage and dispatch it to the store.
   */
  useEffect(() => {
    const name = localStorage.getItem("name");
    console.log(name);
    if (name) {
      dispatch(setName(name));
    }
  }, [dispatch]);

  /**
   * Fetch initial game data from the backend API and store it in the Redux store.
   */
  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((response) => {
        const { data, leaderboard } = response.data;
        const shuffledArray = shuffleArray(data);
        dispatch(setCountries(shuffledArray));
        dispatch(setLeaderBoard(leaderboard));
      })
      .catch((error) => {
        console.error("Fehler beim Abrufen der Daten:", error);
        alert(
          "Fehler beim Abrufen der Daten. Bitte versuchen Sie es später erneut."
        );
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Handles the close dialog event.
   * This function dispatches an action to close the dialog.
   */
  const handleCloseDialog = () => {
    dispatch(setDisplayDialog(false));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url('https://i.pinimg.com/736x/1c/fd/7a/1cfd7aa5cb72caa08479e33ab220ecad.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            padding: "1rem 0 0 0",
          }}
        >
          <Paper
            sx={{
              backgroundColor: "black",
              padding: "1rem",
              marginLeft: "20%",
              marginRight: "20%",
            }}
          >
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4" component="div">
                <span>E</span>
                <span style={{ color: "#c2b040" }}>U</span>
                <span>'</span>
                <span style={{ color: "#c2b040" }}>R</span>
                <span>O</span>
                <span style={{ color: "#c2b040" }}> GUESSR</span>
              </Typography>
            </Toolbar>
          </Paper>
        </AppBar>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container maxWidth="md">
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Game" element={<Game />} />
                <Route path="/Leaderboard" element={<Leaderboard />} />
              </Routes>
              {displayDialog && <Dialog onClose={handleCloseDialog} />}
            </Router>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
