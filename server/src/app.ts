import express from "express";
import * as dotenv from "dotenv";
import WorkoutRouter from "./routes/WorkoutRouter";
import mongoose from "mongoose";

const app = express();
dotenv.config();

app.use(express.json());

// Importation des routers
app.use("/api/workout", WorkoutRouter);

// Connect to mongo
mongoose
  .connect(
    `mongodb://${process.env.MONGO_CONTAINER_IP}:${process.env.MONGO_CONTAINER_PORT}/${process.env.MONGO_DATABASE}`,
    {
      user: process.env.MONGO_ROOT_USER,
      pass: process.env.MONGO_ROOT_PASSWORD,
    }
  )
  .then(() => {
    // Start server
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to MongoDB & Running at port : ${process.env.PORT}`
      );
    });
  })
  .catch((err: string) => {
    console.log(err);
  });
