import express from "express";
import cors from "cors";
import morgan from "morgan";
import chalk from "chalk";
import * as dotenv from "dotenv";

import WorkoutRouter from "./routes/WorkoutRouter";
import UserRouter from "./routes/UserRouter";
import mongoose from "mongoose";

const app = express();
dotenv.config();
//morgan("\x1b[33m:method :url :status :res[content-length] - :response-time ms")
// chalk.blue(":method")
app
  .use(express.json())
  .use(cors())
  .use(
    morgan(
      "\x1b[33m:method \x1b[36m:url \x1b[32m:status - \x1b[35m:response-time ms"
    )
  );

// Importation des routers
app.use("/api/workout", WorkoutRouter).use("/api/user", UserRouter);

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
