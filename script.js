"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (
      personalMovieDB.count === "" ||
      personalMovieDB.count === null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
        b = +prompt("На сколько оцениваете его?", "");
      if (a !== null && b !== null && a !== "" && b !== "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDb: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: () => {
    personalMovieDB.privat
      ? (personalMovieDB.privat = false)
      : (personalMovieDB.privat = true);
  },
  writeYourGenres: () => {
    for (let i = 1; i < 2; i++) {
      const genres = prompt('Введите Ваши любимые жанры через запятую').toLowerCase();
      if (genres === '' || genres === null) {
        console.log('Вы ввели некорректные данные или не ввели их вовсе');
        i--;
      } else {
        personalMovieDB.genres= genres.split(', ');
        personalMovieDB.genres.sort();
      }      
    }
    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`)
    })
  },
};

