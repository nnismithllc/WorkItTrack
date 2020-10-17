const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workittrackSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter an exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name"
        },
        duration: {
          type: Number,
          required: "Enter an exercise duration in minutes"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        }
      }
    ]
  },
);
workittrackSchema.virtual("totalDuration").get(function () {
return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const workittrack = mongoose.model("workittrack", workittrackSchema);

module.exports = workittrack;