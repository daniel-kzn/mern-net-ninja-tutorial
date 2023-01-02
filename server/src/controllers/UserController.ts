import { Request, Response } from "express";
import mongoose from "mongoose";
import User from "./../models/UserModel";

const loginUser = async (req: Request, res: Response) => {};

const signUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.signup(name, email, password);
    res.status(200).json({ email, user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export { loginUser, signUser };
