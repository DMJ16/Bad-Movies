const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const request = require("request"); // why have request?
// const axios = require("axios").default;
// const { API_KEY } = require("../config.js");

//MODELS
// const Movie = require("./models/movieModel.js");
// const Genre = require("./models/genreModel.js");
//Helpers
// const apiHelpers = require("./helpers/apiHelpers.js");

//Middleware
app.use(bodyParser.json());

// Due to express, when you load the page,
// it doesn't make a get request to '/',
// it simply serves up the dist folder
app.use(express.static(__dirname + "/../client/dist"));

//ROUTES
// import routes
const movieRoutes = require("./routes/movieRoutes.js");
// use middleware
app.use("/movies", movieRoutes);

app.listen(1128, function () {
  console.log("listening on port 1128!");
});

/*
Use the routes below to build your application:

|      URL         | HTTP Verb |  Result                                                     |
| :------------:   | :-------: |------------------------------------------------------:      |
|     /genres      |   GET     |  Respond with JSON of all genres                            |
|     /search      |   GET     |  Respond with JSON of all movies by the selected genre      |
|     /save        |   POST    |  Save selected movie as favorite                            |
|     /delete      |   POST    |  Remove selected movie as favorite                          |

*/

// / const Promise = require("bluebird");
// const mongoose = Promise.promisifyAll(require("mongoose"));
//Routes
//***********************************************************************************************************************
//OPTION 1: Use regular routes;
//If you are using OPTION 1, you do not need routes>movieRoutes.js file

// app.get("/genres", (req, res) => {
//   // make an axios request to get the official list of genres from themoviedb
//   // use this endpoint. you will need your API key from signup: https://api.themoviedb.org/3/genre/movie/list
//   return axios
//     .get(apiHelpers.genreListPath)
//     .then((res) => apiHelpers.saveGenres(res))
//     .then((genres) => res.status(200).send(genres))
//     .catch((err) => console.error(err));
// });

// app.get("/search", function (req, res) {
//   // use this endpoint to search for movies by genres (using API key): https://api.themoviedb.org/3/discover/movie
//   // and sort them by votes (worst first) using the search parameters in themoviedb API
//   // do NOT save the results into the database; render results directly on the page
//   return (
//     axios
//       .get(apiHelpers.searchByGenre(878))
//       .then((data) => console.log(data.data.total_results))
//       // res.status(200).send(genres)
//       .catch((err) => console.error(err))
//   );
// });

// app.post("/save", (req, res) => {
//   const movie = new Movie(req.body);
//   return movie
//     .save()
//     .then((data) => res.status(201).send(data))
//     .catch((err) => console.error(err));
// });

// app.post("/delete", function (req, res) {
//   //remove movie from favorites into the database
//   return Movie.findOneAndDelete(req.body)
//     .then((data) => res.status(200).send(data))
//     .catch((err) => {
//       console.log(err);
//       console.error(err);
//     });
// });
// app.get("/movies", (req, res) => {
//   return Movie.find()
//     .then((data) => res.status(200).send(data))
//     .catch((err) => {
//       console.error(err);
//     });
// });
// get/find() works as a method of the whole collection as the "as if" table
// app.get("/genres", (req, res) => {
//   return Genre.find()
//     .then((data) => res.status(200).send(data))
//     .catch((err) => console.error(err));
// });

// you save an instance of model aka save doc to the collection
// app.post("/genres", (req, res) => {
//   const genre = new Genre(req.body);
//   return genre
//     .save()
//     .then((data) => res.status(201).send(data))
//     .catch((err) => console.error(err));
// });

// const movie = new Movie({
//   title: req.title,
//   genres: req.genres,
//   runtime: req.runtime,
//   popularity: req.popularity,
//   vote_average: req.vote_average,
// });
