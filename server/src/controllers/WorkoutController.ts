import { Request, Response } from "express";

const getWorkouts = async (req: Request, res: Response) => {};
const getWorkout = async (req: Request, res: Response) => {};
const createWorkout = async (req: Request, res: Response) => {
  const { title, load, reps } = req.body;
};
const deleteWorkout = async (req: Request, res: Response) => {};
const updateWorkout = async (req: Request, res: Response) => {};

export { getWorkout, getWorkouts, createWorkout, updateWorkout, deleteWorkout };
