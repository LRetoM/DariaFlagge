import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slice";

/**
 * Erstellt und konfiguriert den Redux-Store.
 *
 * Der Store kombiniert verschiedene Reduzierer (in diesem Fall nur `gameReducer`)
 * und stellt den zentralen Zustand der Anwendung bereit.
 *
 * @type {import('@reduxjs/toolkit').EnhancedStore}
 */
export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});
