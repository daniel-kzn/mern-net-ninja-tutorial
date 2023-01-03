import { Request, Response } from "express";
import User from "./../models/UserModel";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    // create token
    const token = createToken(user._id);
    const { name } = user;
    res.status(200).json({ name, email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const signUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.signup(name, email, password);
    // create token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export { loginUser, signUser };
