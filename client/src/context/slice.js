import { createSlice } from "@reduxjs/toolkit";

/**
 * Der initiale Zustand des Spiels.
 *
 * @typedef {Object} GameState
 * @property {number} points - Die aktuelle Punktzahl des Spielers.
 * @property {number} lifes - Die Anzahl der verbleibenden Leben des Spielers.
 * @property {number} counter - Der Zähler für die Anzahl der gestellten Fragen.
 * @property {string} questionType - Der Typ der aktuellen Frage ("country" oder "capital").
 * @property {boolean} displayDialog - Gibt an, ob der Dialog angezeigt werden soll.
 * @property {Array} countries - Eine Liste von Ländern, die im Spiel verwendet werden.
 * @property {Array} leaderboard - Die Bestenliste der Spieler.
 * @property {string} name - Der Name des Spielers.
 */
const initialState = {
  points: 0,
  lifes: 3,
  counter: 0,
  questionType: "country",
  displayDialog: false,
  countries: [],
  leaderboard: [],
  name: "player 1",
};

/**
 * Ein Redux Slice für den Spielzustand.
 *
 * Enthält den initialen Zustand sowie die verschiedenen Aktionen zur Verwaltung des Spielzustands.
 *
 * @type {import('@reduxjs/toolkit').Slice<GameState>}
 */
const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    /**
     * Setzt die Punktzahl des Spielers.
     *
     * @param {GameState} state - Der aktuelle Zustand des Spiels.
     * @param {import('@reduxjs/toolkit').PayloadAction<number>} action - Die Aktion mit der neuen Punktzahl.
     */
    setPoints: (state, action) => {
      state.points = action.payload;
    },

    /**
     * Setzt die Anzahl der verbleibenden Leben des Spielers.
     *
     * @param {GameState} state - Der aktuelle Zustand des Spiels.
     * @param {import('@reduxjs/toolkit').PayloadAction<number>} action - Die Aktion mit der neuen Anzahl von Leben.
     */
    setLifes: (state, action) => {
      state.lifes = action.payload;
    },

    /**
     * Erhöht den Zähler für die Anzahl der gestellten Fragen um eins.
     *
     * @param {GameState} state - Der aktuelle Zustand des Spiels.
     */
    incrementCounter: (state) => {
      state.counter += 1;
    },

    /**
     * Setzt den Fragetyp ("country" oder "capital").
     *
     * @param {GameState} state - Der aktuelle Zustand des Spiels.
     * @param {import('@reduxjs/toolkit').PayloadAction<string>} action - Die Aktion mit dem neuen Fragetyp.
     */
    setQuestionType: (state, action) => {
      state.questionType = action.payload;
    },

    /**
     * Setzt den Wert, ob der Dialog angezeigt werden soll.
     *
     * @param {GameState} state - Der aktuelle Zustand des Spiels.
     * @param {import('@reduxjs/toolkit').PayloadAction<boolean>} action - Die Aktion mit dem neuen Wert für displayDialog.
     */
    setDisplayDialog: (state, action) => {
      state.displayDialog = action.payload;
    },

    /**
     * Setzt die Liste der Länder, die im Spiel verwendet werden.
     *
     * @param {GameState} state - Der aktuelle Zustand des Spiels.
     * @param {import('@reduxjs/toolkit').PayloadAction<Array>} action - Die Aktion mit der neuen Liste von Ländern.
     */
    setCountries: (state, action) => {
      state.countries = action.payload;
    },

    /**
     * Setzt den Namen des Spielers.
     *
     * @param {GameState} state - Der aktuelle Zustand des Spiels.
     * @param {import('@reduxjs/toolkit').PayloadAction<string>} action - Die Aktion mit dem neuen Namen des Spielers.
     */
    setName: (state, action) => {
      state.name = action.payload;
    },

    /**
     * Setzt die Bestenliste der Spieler.
     *
     * @param {GameState} state - Der aktuelle Zustand des Spiels.
     * @param {import('@reduxjs/toolkit').PayloadAction<Array>} action - Die Aktion mit der neuen Bestenliste.
     */
    setLeaderBoard: (state, action) => {
      state.leaderboard = action.payload;
    },
  },
});

export const {
  setPoints,
  setLifes,
  incrementCounter,
  setQuestionType,
  setDisplayDialog,
  setCountries,
  setLeaderBoard,
  setName,
} = gameSlice.actions;

export default gameSlice.reducer;
