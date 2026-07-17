const movies = [
  {
    id: 1,
    title: "Inception",
    releaseDate: "2010-07-16",
    director: "Christopher Nolan",
    genres: ["sciFi", "thriller", "action"],
    hasSequel: false,
    runtime: 148,
    boxOffice: {
      worldwide: "$829.9M",
      domestic: "$292.6M",
      international: "$536.3M",
    },
    ratings: {
      imdb: {
        rating: 8.8,
        votes: 2200000,
      },
      rottenTomatoes: {
        rating: 87,
        reviewsCount: 350,
      },
    },
  },
  {
    id: 2,
    title: "The Matrix",

    releaseDate: "1999-03-31",
    director: "The Wachowskis",
    genres: ["sciFi", "action", "adventure"],
    hasSequel: true,
    runtime: 136,
    boxOffice: {
      worldwide: "$463.5M",
      domestic: "$171.5M",
      international: "$292M",
    },
    ratings: {
      imdb: {
        rating: 8.7,
        votes: 1800000,
      },
      rottenTomatoes: {
        rating: 88,
        reviewsCount: 300,
      },
    },
  },
  {
    id: 3,
    title: "The Godfather",
    releaseDate: "1972-03-24",
    director: "Francis Ford Coppola",
    genres: ["crime", "drama"],
    hasSequel: true,
    runtime: 175,
    boxOffice: {
      worldwide: "$250M",
      domestic: "$136M",
      international: "$114M",
    },
    ratings: {
      imdb: {
        rating: 9.2,
        votes: 1600000,
      },
      rottenTomatoes: {
        rating: 98,
        reviewsCount: 150,
      },
    },
  },
  {
    id: 4,
    title: "Pulp Fiction",
    releaseDate: "1994-10-14",
    director: "Quentin Tarantino",
    genres: ["crime", "drama", "thriller"],
    hasSequel: false,
    runtime: 154,
    boxOffice: {
      worldwide: "$213.9M",
      domestic: "$107.9M",
      international: "$106M",
    },
    ratings: {
      imdb: {
        rating: 8.9,
        votes: 1900000,
      },
      rottenTomatoes: {
        rating: 92,
        reviewsCount: 250,
      },
    },
  },
  {
    id: 5,
    title: "The Dark Knight",
    releaseDate: "2008-07-18",
    director: "Christopher Nolan",
    genres: ["action", "crime", "drama"],
    hasSequel: true,
    runtime: 152,
    boxOffice: {
      worldwide: "$1.005B",
      domestic: "$535M",
      international: "$469.7M",
    },
    ratings: {
      imdb: {
        rating: 9.1,
        votes: 2500000,
      },
      rottenTomatoes: {
        rating: 94,
        reviewsCount: 330,
      },
    },
  },
];

/////// JUST METHODS ///////////////////////

const a = 5;

const b = 7;

//return 12
function calcDecl() {
  return a + b;
}

console.log(calcDecl());
//return 13
const caclExp = function () {
  return a + b;
};

console.log(caclExp() + 1);

//return 14
console.log(
  (function () {
    return a + b + 2;
  })()
);

//return 15
const arrowFunc = () => a + b;
console.log(arrowFunc() + 3);

function bestMovieFunction() {
  return movies
    .filter((movie) => movie.ratings.imdb.rating >= 9)
    .map((movie) => movie.title);
}

function getFilm(id) {
  return movies.find((item) => item.id === id);
}

//console.log(getFilm(1));

///////////RESTRUCTURISATION AND DESTRUCTURIZATION/////////////////////////////

//Restructurization
const film = getFilm(2);

console.log(film);

//Without restructurisation
const titleX = film.title;
const releaseDateX = film.releaseDate;

//With restructurisation

const {
  title,
  releaseDate,
  director: directorName,
  scripter = "me",
  boxOffice: { worldwide, domestic },
} = film;

console.log(title);
console.log(directorName);
console.log(scripter);
console.log(domestic);

//destructurization

//without
//const action = film.genres[1];
//console.log(action);

//with

const [sciFi, action, adventure] = film.genres;

console.log(sciFi);

///////////REST AND SPREAD OPERATIONS/////////////////////////////

//rest
const [firstGenre, ...other] = film.genres;

console.log(firstGenre);
console.log(other);

//spread

const updatedGenres = [...film.genres, "comedy"];
console.log(updatedGenres);

const str = "hello";

const textSpread = [...str];

console.log(textSpread);

const updatedFilm = { ...movies[1], awards: ["Oscar, Golden Globe"] };
movies[1] = updatedFilm;
console.log(movies[1]);

//Template literals

console.log(`The ${5 + 5}`);
console.log(
  `${movies[1].title} released at ${movies[1].releaseDate.split("-")[0]} year`
);

/////// LOGIC AND TERBNARY OPERATORS AND IF/ELSE///////////////////////

const age = 18;
let canVote;

if (age >= 18) {
  canVote = "You can vote";
} else {
  canVote = "You are too young to vote";
}
console.log(canVote);

//ternary!
const canVote2 = age >= 18 ? "You can vote" : "You are too young to vote";

console.log(canVote2);

//logic
//Выполнит если условие истино(короткое замыкание)
const result = film.ratings.imdb.rating > 8 && console.log("Good film");

console.log(result);
//Выполнит если условие ложно
const result2 = film.ratings.imdb.rating > 9 || console.log("Good film!!!!!");

const userAge = null;
const defaultAge = 18;
// если userAge не null или undefind то выведи его иначе выведи дефолтное defaultAge
const age2 = userAge ?? defaultAge;
console.log(age2);

/////// OPTIONAL CHAINING///////////////////////

function getRatingVotes() {
  const imdbRating = film.ratings.imdb.votes;
  const rtRating = film.ratings.rottenTomatoes?.reviewsCount ?? 0;
  return imdbRating + rtRating;
}
console.log(getRatingVotes());

///////MAP METHOD///////////////////////

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(function (i) {
  return i + 1;
});

console.log(newArr);

arr.forEach(function (i) {
  console.log(i + 2);
});

const titles = movies.map((movie) => {
  return { name: movie.title, director: movie.director };
});

console.log(titles);

///////FILTER METHOD///////////////////////

const reallyGoodMovies = movies
  .filter((movie) => movie.ratings.imdb.rating > 9)
  .map((i) => {
    return { name: i.title };
  });

console.log(reallyGoodMovies);

///////REDUCE METHOD///////////////////////

//acc -аккумулятор который суммирует в себе каждый шаг
//movie.runtime - то что хотим посчитать
//0 - стартовое значение

const totalTime = movies.reduce((acc, movie) => acc + movie.runtime, 0);

console.log(`Total time: ${totalTime} minutes`);

///////СУММА ВСЕХ МИРОВЫХ СБОРОВ ВСЕХ ФИЛЬМОВ///////////////////////
const totalBoxOffice = movies.map((i) => {
  return {
    boxOffice: i.boxOffice.worldwide,
  };
});

const totalIntMoney = totalBoxOffice.map((i) => {
  return Number(i.boxOffice.slice(1, -1));
});
console.log(`$${totalIntMoney.reduce((acc, money) => acc + money, 0)}M`);

///////SORT METHOD///////////////////////

const arr3 = [1, 56, 7, 1, 123, -10];

// метод сорт всегда мутирует ориганальную версию массива, для избежания этого использую оператор spread [...] или метод slice()

sortedArr = [...arr3].sort((a, b) => a - b);

console.log(sortedArr);
console.log(arr3);

///////SYNC AND PROMISES///////////////////////

//default fetching

// fetch("https://meowfacts.herokuapp.com")
//   .then((response) => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error("Response was not ok");
//     }

//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => alert("Invalid adress"));

//async fetching

async function getFilm() {
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=6d9737ce&s=batman"
    );
    if (!response.ok) {
      throw new Error(`http error: Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    console.log("finally some");
  }
}

async function getFilmFromRemote() {
  const response = await fetch(
    "http://www.omdbapi.com/?apikey=6d9737ce&s=whore"
  );
  const data = await response.json();
  return data;
}

async function main() {
  const movie = await getFilmFromRemote();
  console.log(movie);
}

main();
