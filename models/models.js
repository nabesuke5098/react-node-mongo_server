const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Twitter = require("./twitter.model");
const Parameter = require("./parameter.model");

// DB connect
const db =mongoose.connect(process.env.MDB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if(err) return console.error(err);
  console.log("Connected to MongoDB");
});



