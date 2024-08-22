import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

/**
 * DisplayLeaderboard-Komponente.
 *
 * Diese Komponente zeigt die Bestenliste an. Jeder Eintrag in der Bestenliste besteht
 * aus dem Namen des Spielers und dessen Punktzahl.
 *
 * @author Ferhat Agostinis
 */
const DisplayLeaderboard = () => {
  // Zugriff auf die Bestenliste aus dem Redux-Store
  const leaderboard = useSelector((state) => state.game.leaderboard);

  return (
    <Box mt={4}>
      <Typography variant="h5" align="center" gutterBottom>
        Bestenliste
      </Typography>
      {leaderboard.length > 0 ? (
        <List>
          {leaderboard.map((entry, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${entry.name}`}
                secondary={`Punkte: ${entry.points}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography align="center">No leaderboard entries available</Typography>
      )}
    </Box>
  );
};

export default DisplayLeaderboard;
