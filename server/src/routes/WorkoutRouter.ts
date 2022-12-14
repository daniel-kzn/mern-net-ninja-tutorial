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

WorkoutRouter.get("/", (req: Request, res: Response) => {
  res.json({ msg: "GET all workouts" });
});

WorkoutRouter.get("/:id", (req: Request, res: Response) => {
  res.json({ msg: `GET one workout with id:` });
});

// Create workout
WorkoutRouter.post("/", (req: Request, res: Response) => {
  // extract
  const { title, load, reps } = req.body;
  try {
    const workout = Workout.create({ title, load, reps });
    res.status(200).json({
      msg: `Succes create workout`,
      workout: `${workout}`,
    });
  } catch (err) {
    res.status(400).json({ error: `${err}` });
  }
});

export default WorkoutRouter;
