let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
console.log(numberOfFilms); 
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB);