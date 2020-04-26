const Promise = require("bluebird");
const mongoose = Promise.promisifyAll(require("mongoose"));
const mongoDb = require("../../db/mongodb");
const Schema = mongoose.Schema;

// instantiate movieSchema
const movieSchema = new Schema({
  title: String,
  genres: Array,
  runtime: Number,
  popularity: Number,
  vote_average: Number,
});

// instantiate Movie model
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
