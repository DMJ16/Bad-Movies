const Promise = require("bluebird");
const mongoose = Promise.promisifyAll(require("mongoose"));
const mongoDb = require("../../db/mongodb");
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  name: String,
  id: Number,
});

// instantiate Genre model
// export
const Genre = mongoose.model("Genre", genreSchema);
module.exports = Genre;
