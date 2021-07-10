"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == ''
    || numberOfFilms == null 
    || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        if ( a != null 
            && b != null 
            && a != '' 
            && b != '' 
            && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log(personalMovieDB.movies);
    
        } else {
            console.log ('Error');
            i--;
        }
    }
}

function detectPersonalMovie() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 
        && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы Киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
// start();
// rememberMyFilms();
/// detectPersonalMovie();
writeYourGenres();
showMyDB(personalMovieDB.privat);

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}




function writeYourGenres() {
    
    let genresCount = 1;
    while (genresCount <= 3) {
        let favoritGenres = prompt(`Ваш любимый жанр под номером ${genresCount}`, 'Thriller');
        if (favoritGenres != null && favoritGenres != '') {
            personalMovieDB.genres[genresCount - 1]=favoritGenres;
            genresCount++;
        } 
    }
 console.log(personalMovieDB.genres);
}

