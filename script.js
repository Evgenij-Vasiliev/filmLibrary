const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
const lastMovieTitle = prompt("Какой фильм вы посмотрели последним?");
const rating = prompt("Во сколько баллов(до 10) оцениваете фильм?");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    genres: [],
    privat: false,
};

personalMovieDB.movies.title = lastMovieTitle;
personalMovieDB.movies.score = rating;

console.log(`Количество просмотренных фильмов: ${numberOfFilms}`);
console.log(`Последний просмотренный фильм: ${lastMovieTitle}`);
console.log(`Оценка: ${rating}`);
console.log(personalMovieDB);
