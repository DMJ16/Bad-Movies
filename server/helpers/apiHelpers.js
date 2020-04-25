const request = require("request");
const axios = require("axios").default;
const { API_KEY } = require("../../config.js");
const Genre = require("../models/genreModel");
const Promise = require("bluebird");

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
  searchByGenre: (id) =>
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${id}`,
};

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// https://api.themoviedb.org/3/genre/movie/list?api_key=ecc1fdca49814a94f94e4f859477c407&language=en-US
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file
