// Mongoose Variables
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// WorkoutSchema Function
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter an exercise type",
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name",
        },
        duration: {
          type: Number,
          required: "Enter an exercise duration in minutes",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Virtual Data for Totals
workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

// Models Mongood Export Information
const workout = mongoose.model("workout", workoutSchema);
module.exports = workout;
