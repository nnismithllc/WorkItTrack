// Variables for Express, Morgan, Mongoose, Path, ApiRoutes, and HTMLRoutes
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const htmlroutes = require("./routes/htmlroutes.js");
const api = require("./routes/apiroutes.js");
console.log(htmlroutes);

// Port Access
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware for Node.JS
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Mongoose Connector Function for Database
mongoose.connect(
  "mongodb+srv://Work123:Work123@workittrack.w6qsd.mongodb.net/WorkItTrack?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// Port Export Direction for Display
app.use(htmlroutes);
app.use(api);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
