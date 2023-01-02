import { Request, Response } from "express";
import mongoose from "mongoose";
import Workout from "../models/WorkoutModel";

const getWorkout = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ error: "No such workout, id synthax not valid" });
    }
    const workout = await Workout.findById(id);
    if (!workout) return res.status(400).json({ msg: "not found" });
    res.status(200).json({ msg: `Succes get one workout`, data: workout });
  } catch (err) {
    res.status(400).json({ error: `${err}` });
  }
};

// GET ALL
const getWorkouts = async (req: Request, res: Response) => {
  try {
    // triage pour faire monter le plus récent
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json({ msg: `Succes get all workouts`, data: workouts });
  } catch (err) {
    res.status(400).json({ error: `${err}` });
  }
};

// CREATE
const createWorkout = async (req: Request, res: Response) => {
  const { title, load, reps } = req.body;
  let emptyFields: string[] = [];
  if (!title) emptyFields.push("title");
  if (!load) emptyFields.push("load");
  if (!reps) emptyFields.push("reps");
  if (emptyFields.length > 0)
    res
      .status(400)
      .json({ error: "Merci de remplir les champs :", emptyFields });
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json({
      msg: `Succes create workout`,
      data: workout,
    });
  } catch (err) {
    res.status(400).json({ error: `${err}` });
  }
};

// DELETE
const deleteWorkout = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "No such workout, id synthax not valid" });
  }
  try {
    const workout = await Workout.findOneAndDelete({ _id: id });
    if (!workout) return res.send(400).json({ msg: "not found" });
    res.status(200).json({ msg: "Deleted succed", data: workout });
  } catch (err) {
    res.status(400).json({ error: `${err}` });
  }
};

// UPDATE
const updateWorkout = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "No such workout, id synthax not valid" });
  }
  try {
    const { title, load, reps } = req.body;
    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      {
        title: title,
        load: load,
        reps: reps,
      }
    );
    if (!workout) return res.send(400).json({ msg: "not found" });
    res.status(200).json({ msg: "Updated succed", data: workout });
  } catch (err) {
    res.status(400).json({ error: `${err}` });
  }
};

export { getWorkout, getWorkouts, createWorkout, updateWorkout, deleteWorkout };
