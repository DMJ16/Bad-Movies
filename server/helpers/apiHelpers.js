// const request = require("request");
// const axios = require("axios").default;
const Promise = require("bluebird");
const { API_KEY } = require("../../config.js");
const Genre = require("../models/genreModel");

// write out logic/functions required to query TheMovieDB.org

module.exports = {
  saveGenres: (res) => {
    const arr = res.data.genres;
    const genres = arr.map((genre) => {
      const genreInst = new Genre({
        name: genre.name,
        id: genre.id,
      });
      // just a promise (not executed)
      return genreInst.save();
    });
    return Promise.all(genres);
  },
  genreListPath: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  searchPath: (i) =>
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&with_genres=${i}`,
};

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// https://api.themoviedb.org/3/genre/movie/list?api_key=ecc1fdca49814a94f94e4f859477c407&language=en-US
// Get your API Key and save it in your config file
// Don't forget to export your functions and require them within your server file
