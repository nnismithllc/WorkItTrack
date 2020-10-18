const express = require("express");
const mongojs = require("mongodb");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workittrack',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(htmlroutes);
app.use(apiroutes);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
