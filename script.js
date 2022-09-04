const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const lastMovieTitle = prompt('Один из последних просмотренных фильмов?', '');
const rating = +prompt('Во сколько баллов(до 10) оцениваете фильм?', '');

const lastMovieTitle2= prompt('Один из последних просмотренных фильмов??', '');
const rating2= +prompt('Во сколько баллов(до 10) оцениваете фильм?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

personalMovieDB.movies[lastMovieTitle] = rating;
personalMovieDB.movies[lastMovieTitle2] = rating2;

console.log(`Количество просмотренных фильмов: ${numberOfFilms}`);
console.log(`Один из последних просмотренных фильмов: ${lastMovieTitle}`);
console.log(`Оценка: ${rating}`);
console.log(`Один из последних просмотренных фильмов: ${lastMovieTitle2}`);
console.log(`Оценка: ${rating2}`);
console.log(personalMovieDB);
