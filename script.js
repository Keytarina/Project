//1
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//2
let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

//3
let firstFilm = prompt("Один из просмотреных фильмов?",""),
	firstFilmRating = prompt("Насколько оцените его?",""),
	secondFilm = prompt("Один из просмотреных фильмов?",""),
	secondFilmRating = prompt("Насколько оцените его?","");

personalMovieDB.movies[firstFilm] = firstFilmRating;
personalMovieDB.movies[secondFilm] = secondFilmRating;

console.log(personalMovieDB);