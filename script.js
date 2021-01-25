"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


// for (let i = 0; i < 2; i++) {
// 	const film = prompt("Один из просмотреных фильмов?",""),
// 		filmRating = prompt("Насколько оцените его?","");

// 	if (film != null && filmRating != null && film != ""  && filmRating != "" && film.length < 50) {
// 		personalMovieDB.movies[film] = filmRating;
// 		console.log("Done");
// 	} else {
// 		console.log("Error")
// 		i--;
// 	}
// }
let i = 0;
while (i < 2) {
	const film = prompt("Один из просмотреных фильмов?",""),
		filmRating = prompt("Насколько оцените его?","");

	if (film != null && filmRating != null && film != ""  && filmRating != "" && film.length < 50) {
		personalMovieDB.movies[film] = filmRating;
		console.log("Done");
	} else {
		console.log("Error")
		i--;
	}
	i++;
}

// if (personalMovieDB.count < 10) {
// 	console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 	console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
// 	console.log("Вы киноман");
// } else {
// 	console.log("Произошла ошибка");
// }

