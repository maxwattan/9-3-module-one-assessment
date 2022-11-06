/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */

// Make error handle
// Make Variable bucket
// make loop
// Input movies titles
// Output movies titles
// Return array of strings of titles
function getAllMovieTitles(movies) {
  if (movies.length === 0) {
    return [];
  }
  let movieTitles = [];
  for (let i = 0; i < movies.length; i++) {
    movieTitles.push(movies[i].title);
  }
  return movieTitles;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
// make error handle
// make variable bucket
// make loop
// input array of movies
// change string into number
// compare and get highest score of movies
// return number
function getHighestMetascore(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let highestMeta = 0;
  for (let i = 0; i < movies.length; i++) {
    if (Number(movies[i].metascore) > highestMeta) {
      highestMeta = Number(movies[i].metascore);
    }
  }
  return highestMeta;
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
// make error handle
// make variable bucket
// input movies imdb ratings
// make loop
// change string to number
// add ratings and divide by movie.length
// return number imdb average

function getAverageIMDBRating(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let avgRating = 0;

  for (let i = 0; i < movies.length; i++) {
    avgRating += Number(movies[i].imdbRating);
  }
  return avgRating / movies.length;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */

// make error handle
// input movies array
// make variable bucket
// make loop
// add ratings(accumulate, value) into categories(key)
// return object of key and value
function countByRating(movies) {
  if (movies.length === 0) {
    return {};
  }
  let ratingCount = {};

  for (let i = 0; i < movies.length; i++) {
    if (ratingCount[movies[i].rated] === undefined) {
      ratingCount[movies[i].rated] = 1;
    } else {
      ratingCount[movies[i].rated]++;
    }
  }
  return ratingCount;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */

// make error handle
// make variable bucket
// input movies and id
// make loop
// return object matching id
function findById(movies, id) {
  if (movies.length === 0) {
    return null;
  }
  let match = null;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].imdbID === id) {
      match = movies[i];
    }
  }
  return match;
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
// make error handle
// make variable bucket
// make loop
// turn gengre to lower case because case sensitive
// check if it matches
// return if matches
function filterByGenre(movies, genre) {
  let matches = [];
  if (movies.length === 0) {
    return [];
  }
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre.toLowerCase().includes(genre.toLowerCase())) {
      matches.push(movies[i]);
    }
  }
  return matches;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
// make empty array
// input movies and year
// make loop
// make string into number
// get and compare year
// return result
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  result = [];
  for (let i = 0; i < movies.length; i++) {
    const releasedYear = Number(movies[i].released.slice(7));
    if (releasedYear <= year) {
      result.push(movies[i]);
    }
  }
  return result;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */

// make error handle
// make variable bucket
// make loop
// take out string, $, comma, and join
// compare each one
// return the winner
function getBiggestBoxOfficeMovie(movies) {
  if (movies.length === 0) {
    return null;
  }
  let highest = 0;
  let title = "";

  for (let i = 0; i < movies.length; i++) {
    let newBox = Number(movies[i].boxOffice.slice(1).split(",").join(""));
    if (newBox > highest) {
      newBox = highest
      title = movies[i].title;
    }
  }
  return title;
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
