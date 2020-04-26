const apiHelpers = require("../helpers/apiHelpers.js");
const Movie = require("../models/movieModel.js");
const axios = require("axios").default;

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // get the search genre
    // https://www.themoviedb.org/account/signup
    // get your API KEY
    // use this endpoint to search for movies by genres, you will need an API key
    // https://api.themoviedb.org/3/discover/movie
    // and sort them by horrible votes using the search parameters in the API
    return axios
      .get(apiHelpers.searchPath(req.id))
      .then((data) => res.status(200).send(data))
      .catch((err) => console.error(err));
  },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
    // send back
    return axios
      .get(apiHelpers.genreListPath)
      .then((res) => apiHelpers.saveGenres(res))
      .then((genres) => res.status(200).send(genres))
      .catch((err) => console.error(err));
  },
  saveMovie: (req, res) => {
    const movie = new Movie(req.body);
    return movie
      .save()
      .then((data) => res.status(201).send(data))
      .catch((err) => console.error(err));
  },
  deleteMovie: (req, res) => {
    //remove movie from favorites into the database
    return Movie.findOneAndDelete({ title: req.body.title })
      .then((data) => res.status(200).send(data))
      .catch((err) => {
        console.error(err);
      });
  },
};

// app.get("/genres", (req, res) => {
//   // make an axios request to get the official list of genres from themoviedb
//   // use this endpoint. you will need your API key from signup: https://api.themoviedb.org/3/genre/movie/list
// });

// app.get("/search", function (req, res) {
//   // use this endpoint to search for movies by genres (using API key): https://api.themoviedb.org/3/discover/movie
//   // and sort them by votes (worst first) using the search parameters in themoviedb API
//   // do NOT save the results into the database; render results directly on the page
// });

// app.post("/save", (req, res) => {});

// app.post("/delete", function (req, res) {});
