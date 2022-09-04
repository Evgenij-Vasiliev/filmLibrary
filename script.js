const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
const lastMovieTitle = prompt("Какой фильм вы посмотрели последним?");
const rating = prompt("Во сколько баллов(до 10) оцениваете фильм?");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        title: lastMovieTitle,
        score: rating,
    },
    genres: [],
    privat: false,
};

console.log(`Количество просмотренных фильмов: ${numberOfFilms}`);
console.log(`Последний просмотренный фильм: ${lastMovieTitle}`);
console.log(`Оценка: ${rating}`);
console.log(personalMovieDB);
