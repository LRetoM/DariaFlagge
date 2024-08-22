/**
 * Retrieves game-related data from local storage.
 *
 * This function accesses the local storage to retrieve the current game state, including the current country,
 * index, points, lives, and question type. If certain values are not found in the local storage, default values are returned.
 *
 * @returns {Object} An object containing the game state:
 * - `index` {number}: The current index in the game, defaulting to 0 if not found.
 * - `points` {number}: The player's current points, defaulting to 0 if not found.
 * - `lives` {number}: The player's remaining lives, defaulting to 3 if not found.
 * - `country` {string|null}: The current country, or null if not found.
 * - `questionType` {string|null}: The type of question (e.g., country or capital), or null if not found.
 */
const getLocalStorage = () => {
  const country = localStorage.getItem("country");
  const index = parseInt(localStorage.getItem("index")) || 0;
  const points = parseInt(localStorage.getItem("points")) || 0;
  const lives = parseInt(localStorage.getItem("lives")) || 3;
  const questionType = localStorage.getItem("questionType");
  return { index, points, lives, country, questionType };
};

export default getLocalStorage;
