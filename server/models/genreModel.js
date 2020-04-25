const Promise = require("bluebird");
const mongoose = Promise.promisifyAll(require("mongoose"));
const mongoDb = require("../../db/mongodb");
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  genre: String,
});

// instantiate Genre model
// export
module.exports = mongoose.model("Genre", genreSchema);
