import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      require: true,
    },
    load: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

// Workout = collection
const WorkoutModel = mongoose.model("Workout", WorkoutSchema);

export default WorkoutModel;
