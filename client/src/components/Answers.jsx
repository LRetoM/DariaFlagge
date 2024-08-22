import React from "react";
import {
  setLifes,
  incrementCounter,
  setDisplayDialog,
  setLeaderBoard,
  setPoints,
  setQuestionType,
} from "../context/slice";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { shuffleArray } from "../utils/helpers/shuffleArray";
import axios from "axios";
import { Button, Box, Grid } from "@mui/material";

/**
 * Answers-Komponente.
 *
 * Diese Komponente rendert die Antwortmöglichkeiten für das aktuelle Land oder die aktuelle Hauptstadt,
 * verwaltet die Benutzerinteraktionen und aktualisiert den Spielstatus entsprechend.
 *
 * @param {Object} props - Die Eigenschaften, die an die Komponente übergeben werden.
 * @param {Object} props.currentCountry - Das aktuelle Land, das im Spiel angezeigt wird.
 * @param {number} props.lives - Die aktuelle Anzahl der Leben des Spielers.
 * @param {number} props.index - Der Index des aktuellen Spiels.
 * @param {Function} props.setKey - Funktion zum Aktualisieren des Schlüssels für den Zustand.
 * @param {number} props.points - Die aktuelle Punktzahl des Spielers.
 * @param {string} props.questionType - Der aktuelle Fragetyp ("country" oder "capital").
 * @param {Function} props.setCurrentCountry - Funktion zum Setzen des aktuellen Landes.
 */
const Answers = ({ currentCountry, setCurrentCountry, setKey }) => {
  const dispatch = useDispatch();
  const { countries, leaderboard, name, lifes, counter, points, questionType } =
    useSelector((state) => state.game);

  const navigate = useNavigate();

  const answerCapital = () => {
    dispatch(setQuestionType("country"));
    const newIndex = counter + 1;
    dispatch(incrementCounter(newIndex));
  };

  const answerCountry = () => {
    dispatch(setQuestionType("capital"));
    const newOpps = shuffleArray(currentCountry.opps);
    setCurrentCountry((currCountry) => ({ ...currCountry, opps: newOpps }));
  };

  const navigateAndGetUpdateHighscore = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3001/getAndUpdateLeaderboard",
        { name, points }
      );
      dispatch(setLeaderBoard(res.data.leaderboard));
      navigate("/Leaderboard"); // Wechsel zum Leaderboard
    } catch (err) {
      console.log(err, "leaderboard wurde nicht geupdatet");
    }
  };

  // Verarbeitet die Auswahl des Benutzers
  const handleUserChoice = (e) => {
    e.preventDefault();

    const isAnswerCorrect = parseInt(e.target.name, 10) === counter;
    console.log(isAnswerCorrect, e.target.name, counter);

    if (isAnswerCorrect) {
      console.log("Punkt +1");
      dispatch(setPoints(points + 1));
      questionType === "country" ? answerCountry() : answerCapital();
    } else {
      const updatedLifes = lifes - 1;
      dispatch(setLifes(updatedLifes));

      // Überprüft, ob das Spiel vorbei ist, nachdem die Lebenszahl aktualisiert wurde
      if (updatedLifes <= 0) {
        const isInHighScore =
          leaderboard.length > 0
            ? leaderboard.find((entry) => points > entry.points)
            : true;

        if (isInHighScore && name === "player 1") {
          dispatch(setDisplayDialog(true));
        } else {
          navigateAndGetUpdateHighscore();
        }
        return; // Stoppt die weitere Ausführung, wenn das Spiel vorbei ist
      }
    }

    // Aktualisiert den Zustandsschlüssel, um das UI neu zu rendern, wenn das Spiel nicht vorbei ist
    setKey((prevKey) => prevKey + 1);
  };

  const opps = currentCountry?.opps.map((indexOfCountry, index) => (
    <Grid item xs={6} key={index}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        name={indexOfCountry}
        onClick={(e) => handleUserChoice(e)}
        style={{ height: "100%" }}
      >
        {questionType === "country"
          ? countries[indexOfCountry].country
          : countries[indexOfCountry].capital}
      </Button>
    </Grid>
  ));

  return (
    <Box marginTop="1rem">
      <Grid container spacing={2}>
        {opps}
      </Grid>
    </Box>
  );
};

export default Answers;
