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
  backgroundColor: "#FFFFFF",
  color: "#000000",
  borderRadius: "8px",
  padding: "10px 20px",
  margin: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: "#f0f0f0",
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
      <Paper elevation={3} style={{ padding: "2rem", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Hallo {name}
        </Typography>
        <Stack spacing={2} direction="row" justifyContent="center">
          <StyledButton onClick={handleStart}>Start</StyledButton>
          <StyledButton onClick={() => dispatch(setDisplayDialog(true))}>
            Namen Ändern
          </StyledButton>
          <StyledButton onClick={() => navigate("/Leaderboard")}>
            Zur Bestenliste
          </StyledButton>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Home;
