import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

/**
 * Question-Komponente.
 *
 * Diese Komponente zeigt eine Frage basierend auf dem aktuellen Fragetyp (`questionType`) an.
 * Der Fragetyp kann entweder "country" oder "capital" sein und bestimmt, ob die Frage nach dem
 * Land oder der Hauptstadt gestellt wird.
 *
 * @component
 * @example
 * // Beispiel wie man die Komponente verwendet
 * return <Question />;
 *
 * @returns {JSX.Element} Die gerenderte Frage als JSX-Element.
 */
const Question = () => {
  // Zugriff auf den `questionType` aus dem Redux-Store
  const { questionType } = useSelector((state) => state.game);

  return (
    <div>
      <Typography variant="h3">
        {questionType === "country"
          ? "Guess the country:"
          : "Guess the capital?"}
      </Typography>
    </div>
  );
};

export default Question;
