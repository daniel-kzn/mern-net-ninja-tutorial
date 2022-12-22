import { FC, useEffect } from "react";
import { Workout } from "../models/Workout";
import { useWorkoutsContext } from "../hooks/Workouts/useWorkoutsContext";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home: FC = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    fetch("http://localhost:3000/api/workout/")
      .then((resp) => resp.json())
      .then((json) => dispatch({ type: "SET_WORKOUTS", payload: json.data }));
  }, []);

  return (
    <div className="p-6 bg-[#121212]">
      <div className="container">
        <WorkoutForm />
        <div className="flex space-x-10">
          {workouts.map((workout) => {
            return (
              <WorkoutDetails
                title={workout.title}
                reps={workout.reps}
                load={workout.load}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
