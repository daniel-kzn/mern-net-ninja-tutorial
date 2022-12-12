import express from "express";
import dotenv from "dotenv";
import WorkoutRouter from "./routes/WorkoutRouter";

const app = express();

app.use(express.json());

// get      : /cars         -> renvoie toutes les voitures
// post     : /cars         -> créer une nouvelle voiture
// get      : /cars/:id     -> avoir les détails d'une voiture
// delete   : /cars/:id     -> supprime une voiture
// path     : /cars/:id     -> update les détails d'une voiture

// Importation des routers
app.use("/api/workout", WorkoutRouter);

// Start server
app.listen(process.env.PORT, () => {
    console.log("App running")
})