"use strict";

<<<<<<< Updated upstream
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
=======
const a = prompt('Один из последних просмотренных фильмов?', '');
const b = +prompt('Во сколько баллов(до 10) оцениваете фильм?', '');

const a2= prompt('Один из последних просмотренных фильмов??', '');
const b2= +prompt('Во сколько баллов(до 10) оцениваете фильм?', '');
>>>>>>> Stashed changes

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

<<<<<<< Updated upstream
for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = +prompt("На сколько оцениваете его?", "");
    if (a !== null && b !== null && a !== "" && b !== "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log('error');
        i--;
    }
}

=======
personalMovieDB.movies[a] = b;
personalMovieDB.movies[a2] = b2;

console.log(`Количество просмотренных фильмов: ${numberOfFilms}`);
console.log(`Один из последних просмотренных фильмов: ${a}`);
console.log(`Оценка: ${b}`);
console.log(`Один из последних просмотренных фильмов: ${a2}`);
console.log(`Оценка: ${b2}`);
>>>>>>> Stashed changes
console.log(personalMovieDB);
