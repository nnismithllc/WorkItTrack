// Variables for Express
var path = require("path");
const router = require("express").Router();

// Router Function
router.get("/", function (req, res) {
  console.log("home page");
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", function (req, res) {
  console.log("app");
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// Module Export Information
module.exports = router;
