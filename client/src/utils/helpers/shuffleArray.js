/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 *
 * This function creates a shuffled copy of the provided array without modifying the original array.
 * Each element in the array is randomly swapped with another element.
 *
 * @param {Array} array - The array to be shuffled.
 * @returns {Array} A new array with the elements shuffled.
 */
export const shuffleArray = (array) => {
  const updatedArray = [...array];
  for (let i = updatedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [updatedArray[i], updatedArray[j]] = [updatedArray[j], updatedArray[i]];
  }
  return updatedArray;
};
