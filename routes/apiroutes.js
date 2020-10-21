// Variables for WorkIt.js File
const Workout = require("../models/workit.js");
const router = require("express").Router();

// API Router Information Get
router.get("/api/workouts", function (req, res) {
  Workout.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
// API Router Information Post
router.post("/api/workouts", function (req, res) {
  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("err", err);
      res.json(err);
    });
});

// API Router Information Put
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, {
    $push: { exercises: req.body },
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("err", err);
      res.json(err);
    });
});

// Router Export Information
module.exports = router;
