/**
 * Stores game-related data in local storage.
 *
 * This function saves the current game state to local storage, including the current index, points, lives,
 * country, and question type. Only the values provided as arguments are stored; if a value is undefined, it will not be stored.
 *
 * @param {Object} params - The parameters for setting the local storage values.
 * @param {number} [params.index] - The current index in the game.
 * @param {number} [params.points] - The player's current points.
 * @param {number} [params.lives] - The player's remaining lives.
 * @param {string} [params.country] - The current country.
 * @param {string} [params.questionType] - The type of question (e.g., country or capital).
 */
const setLocalStorage = ({
  index = undefined,
  points = undefined,
  lives = undefined,
  country = undefined,
  questionType = undefined,
}) => {
  if (country !== undefined) localStorage.setItem("country", country);
  if (index !== undefined) localStorage.setItem("index", index);
  if (points !== undefined) localStorage.setItem("points", points);
  if (lives !== undefined) localStorage.setItem("lives", lives);
  if (questionType !== undefined)
    localStorage.setItem("questionType", questionType);
};

export default setLocalStorage;
