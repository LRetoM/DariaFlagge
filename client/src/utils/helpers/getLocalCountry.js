/**
 * Generates a local representation of the current country for the game.
 *
 * This function takes the list of countries and the current counter to determine the current country to be displayed.
 * It also generates an array of options (`opps`) that includes the correct answer and three random incorrect options.
 *
 * @param {Array} countries - The list of all available countries.
 * @param {number} counter - The current index in the countries array.
 * @param {Object} coutryLocalstorage - A placeholder parameter (not used in this function).
 * @returns {Object|undefined} An object representing the current country with a set of possible options (`opps`), or `undefined` if the conditions are not met.
 */
export const getLocalCountry = (countries, counter, coutryLocalstorage) => {
  let currentCountryLocal;
  if (countries.length > 0 && counter < countries.length) {
    const country = { ...countries[counter] };
    let it = 0;
    let opps = [];

    while (it < 3) {
      const randomNumber = Math.floor(Math.random() * countries.length);
      if (!opps.includes(randomNumber) && randomNumber !== counter) {
        opps = [...opps, randomNumber];
        it += 1;
      }
    }

    const indexOfCorrectAnswer = Math.floor(Math.random() * 4);
    opps.splice(indexOfCorrectAnswer, 0, counter);
    console.log(opps);
    currentCountryLocal = { ...country, opps };
  }
  return currentCountryLocal;
};
