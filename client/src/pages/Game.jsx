import React, { useEffect, useState } from "react";
import Head from "../components/Head";
import Question from "../components/Question";
import Answers from "../components/Answers";
import { useSelector } from "react-redux";
import { getLocalCountry } from "../utils/helpers/getLocalCountry";
import { Paper, Box } from "@mui/material";

/**
 * Die `Game`-Komponente rendert die Hauptspieloberfläche.
 * Sie zeigt die aktuelle Frage, die Flagge des Landes und die Antwortoptionen an.
 * Außerdem wird der aktuelle Spielstatus wie Punkte und Leben verwaltet.
 *
 * @component
 * @returns {JSX.Element} Die gerenderte Game-Komponente.
 */
const Game = () => {
  const [key, setKey] = useState(0);
  const { counter, points, lifes, country, questionType, countries } =
    useSelector((state) => state.game);

  const [currentCountry, setCurrentCountry] = useState(null);

  /**
   * Effekt, um das aktuelle Land basierend auf dem Spielstatus zu setzen.
   * Der Effekt wird bei Änderungen von `countries`, `counter` oder `country` ausgeführt.
   */
  useEffect(() => {
    const currentCountry = getLocalCountry(countries, counter, country);
    setCurrentCountry(currentCountry);
  }, [countries, counter, country]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      {currentCountry ? (
        <Paper
          elevation={3}
          style={{
            marginTop: "-35%",
            padding: "2rem",
            textAlign: "center",
            width: "400px",
            minHeight: "420px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Head-Komponente zeigt Punkte und Leben an */}
          <Head currentCountry={currentCountry} />

          <Box>
            <Question />
            <Box marginTop="1rem">
              <img
                src={currentCountry.flag}
                alt={`Flag of ${currentCountry.country}`}
                style={{ width: "200px", height: "auto" }}
              />
            </Box>
          </Box>
          <Answers
            points={points}
            setKey={setKey}
            index={counter}
            questionType={questionType}
            lifes={lifes}
            currentCountry={currentCountry}
            setCurrentCountry={setCurrentCountry}
          />
        </Paper>
      ) : (
        <div>...loading</div>
      )}
    </Box>
  );
};

export default Game;
