import React from "react";
import { useSelector } from "react-redux";
import DisplayLeaderboard from "../components/DisplayLeaderboard";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Paper } from "@mui/material";

/**
 * Leaderboard-Komponente.
 *
 * Diese Komponente zeigt die Punktzahl und den Namen des aktuellen Spielers an,
 * zeigt die gesamte Bestenliste über die `DisplayLeaderboard`-Komponente an
 * und bietet einen Button, um zur Startseite zurückzukehren.
 *
 * @component
 * @returns {JSX.Element} Die gerenderte Leaderboard-Komponente.
 *
 * @author Ferhat Agostinis
 */
const Leaderboard = () => {
  const { points, name, leaderboard } = useSelector((state) => state.game);
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      padding={4}
      bgcolor="#1f1f5e"
    >
      <Paper
        elevation={3}
        style={{ padding: "2rem", width: "100%", maxWidth: "600px" }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          {name}'s Punktzahl: {points}
        </Typography>
        <Typography
          style={{ color: "white" }}
          variant="h5"
          align="center"
          gutterBottom
        >
          Bestenliste
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginTop={2}
          marginBottom={4}
        >
          {leaderboard.map((entry, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="space-between"
              width="100%"
              padding="0.5rem 1rem"
              bgcolor={index % 2 === 0 ? "#3c3c8a" : "#2c2c6a"}
              borderRadius="8px"
              marginBottom="0.5rem"
            >
              <Typography variant="body1" color="white">
                {entry.name}
              </Typography>
              <Typography variant="body1" color="white">
                Punkte: {entry.points}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box mt={2} textAlign="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/")}
          >
            Zum Anfang
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Leaderboard;
