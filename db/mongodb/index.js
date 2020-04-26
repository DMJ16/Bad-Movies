// import mongoose
const Promise = require("bluebird");
// promisify mongoose
const mongoose = Promise.promisifyAll(require("mongoose"));

// do we need config for any reason?
// MONGODB_URI only if they ask for not localhost?

// check if mongodb is connected
// make connection
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect("mongodb://localhost/badmovies", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

const db = mongoose.connection;

// Authenticate the connection
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to db...");
});

// export db (mongoose connection)
module.exports.db = db;
