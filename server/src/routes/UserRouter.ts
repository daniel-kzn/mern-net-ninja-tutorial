import express from "express";
import { loginUser, signUser } from "../controllers/UserController";
const UserRouter = express.Router();

//login route
UserRouter.post("/login", loginUser);
// signup route
UserRouter.post("/signup", signUser);

export default UserRouter;
