import express, { Request, Response } from "express";
import Workout from "../models/WorkoutModel";
import {
  getWorkout,
  getWorkouts,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controllers/WorkoutController";

const WorkoutRouter = express.Router();
// Send specefic workout
WorkoutRouter.get("/:id", getWorkout);
// Send all workouts
WorkoutRouter.get("/", getWorkouts);
// Create workout
WorkoutRouter.post("/", createWorkout);
// Update workout
WorkoutRouter.patch("/:id", updateWorkout);
// Delete workout
WorkoutRouter.post("/:id", deleteWorkout);

export default WorkoutRouter;
