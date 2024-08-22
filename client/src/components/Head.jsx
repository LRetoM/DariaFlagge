import React from "react";
import { useSelector } from "react-redux";
import Flag from "./Flag";
import { Typography, Box } from "@mui/material";

/**
 * Head-Komponente.
 *
 * Diese Komponente zeigt den aktuellen Punktestand, die verbleibenden Leben und die Flagge des aktuellen Landes.
 *
 * @param {Object} props - Die an die Komponente übergebenen Eigenschaften.
 * @param {Object} props.currentCountry - Das aktuelle Land, dessen Flagge angezeigt werden soll.
 *
 * @author Ferhat Agostinis
 */
const Head = ({ currentCountry }) => {
  const { points, lifes, questionType } = useSelector((state) => state.game);

  return (
    <Box mb={3} textAlign="center">
      <Typography variant="h5" style={{ color: "#c2b040" }}>
        Punkte: {points}
      </Typography>
      <Typography variant="h5" style={{ color: "#c2b040" }}>
        Leben: {lifes}
      </Typography>
    </Box>
  );
};

export default Head;
