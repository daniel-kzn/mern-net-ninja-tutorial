import { FC, useEffect, useContext, useReducer } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { WorkoutsContext } from "../context/WorkoutsContext";

const HomeLogged: FC = () => {
  const { state, dispatch } = useContext(WorkoutsContext);

  useEffect(() => {
    fetch("http://localhost:3000/api/workout/")
      .then((resp) => resp.json())
      .then((json) => dispatch({ type: "SET_WORKOUTS", payload: json.data }));
  }, []);

  return (
    <div className="p-6  m-6 shadow-md">
      <div className="container">
        <WorkoutForm />
        <div className="grid grid-cols-4 gap-2 w-auto py-5">
          {state.workouts.map((workout) => {
            return (
              <WorkoutDetails
                key={workout._id}
                _id={workout._id}
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

export default HomeLogged;
