import express, {Request, Response} from "express"

const WorkoutRouter = express.Router();

WorkoutRouter.get("", (req: Request, res: Response) => {
    res.json({msg: "GET all workouts"});
});

WorkoutRouter.get("/:id", (req: Request, res: Response) => {
    res.json({msg: `GET one workout with id:`})
});

WorkoutRouter.post("/", (req: Request, res: Response) => {
    res.json({msg: `POST one workout with `})
});

export default WorkoutRouter;