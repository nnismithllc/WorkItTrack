const Workout = require("../models/workout.js")

module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        Workout.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });

    app.post("/api/workouts", function (req, res) {
        Workout.create({})
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });

    app.get("/find/:id", (req, res) => {
        db.exercises.findOne(
          {
            _id: mongojs.ObjectId(req.params.id)
          },
          (error, data) => {
            if (error) {
              res.send(error);
            } else {
              res.send(data);
            }
          }
        );
      });  
}