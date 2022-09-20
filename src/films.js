// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map(item => item.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter(item => item.director == director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const result = getMoviesFromDirector(array, director);
  const average = moviesAverage(result);
  return average;
}

function moviesAverage(array) {
  const initialValue = 0;
  const result = Number((array.reduce((previousValue, currentValue) => previousValue + currentValue.score, initialValue) / array.length).toFixed(2));
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const result = array.map(item => item.title).sort();
  return result.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  // Array.from & [...array] return new array swallow-copied
  const result = [...array].sort((a, b) => a.year - b.year || (a.title < b.title ? -1 : (a.title > b.title ? 1 : 0)));
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const films = array.filter(item => item.genre == genre && typeof item.score == 'number');
  const result = moviesAverage(films);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const result = array.map(element => ({...element}));
  result.forEach(element => {
    let hoursMinutes = element.duration.split(' ');
    let hours = parseInt(hoursMinutes[0]);
    let minutes = parseInt(hoursMinutes[1]);
    element.duration = hoursMinutes.length > 1 ? hours * 60 + minutes : hours * 60;
  });
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
