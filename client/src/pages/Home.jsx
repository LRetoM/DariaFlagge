import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayDialog, setLifes, setPoints } from "../context/slice";
import { Typography, Box, Stack, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

/**
 * Home-Komponente.
 *
 * Diese Komponente begrüßt den Spieler, zeigt seinen Namen an und bietet Buttons:
 * einen, um das Spiel zu starten, einen anderen, um den Namen des Spielers zu ändern,
 * und einen weiteren, um zur Bestenliste zu navigieren.
 *
 * @component
 * @returns {JSX.Element} Die gerenderte Home-Komponente.
 *
 * @author Ferhat Agostinis
 */

// Gestylter Button mit Material-UI
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#007BFF",
  color: "#FFFFFF",
  borderRadius: "12px",
  padding: "12px 24px",
  margin: "15px",
  fontWeight: "bold",
  fontSize: "1.1rem",
  textTransform: "uppercase",
  boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
  transition: "background-color 0.3s ease, transform 0.2s ease",
  "&:hover": {
    backgroundColor: "#0056b3",
    transform: "translateY(-2px)",
  },
}));

/**
 * Die `Home`-Komponente rendert die Startseite des Spiels.
 * Sie zeigt den Namen des Spielers an und enthält Buttons zum Starten des Spiels,
 * Ändern des Namens und Anzeigen der Bestenliste.
 *
 * @component
 * @returns {JSX.Element} Die gerenderte Home-Komponente.
 */
const Home = () => {
  const { name } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * Handler für den Start-Button.
   * Setzt die Punkte und Leben zurück und navigiert zur Spielseite.
   *
   * @param {Event} e - Das Klick-Event des Start-Buttons.
   */
  const handleStart = (e) => {
    e.preventDefault();
    dispatch(setPoints(0));
    dispatch(setLifes(3));
    navigate("/game");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Paper
        elevation={5}
        style={{
          marginTop: "-10rem",
          padding: "3rem",
          textAlign: "center",
          borderRadius: "20px",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          style={{
            fontWeight: "bold",
            color: "#FFFFFF",
            marginBottom: "1.5rem",
          }}
        >
          Welcome {name}
        </Typography>
        <Stack spacing={3} direction="column" justifyContent="center">
          <StyledButton onClick={handleStart}>Start</StyledButton>
          <StyledButton onClick={() => dispatch(setDisplayDialog(true))}>
            Change Name
          </StyledButton>
          <StyledButton onClick={() => navigate("/Leaderboard")}>
            Highscores
          </StyledButton>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Home;
