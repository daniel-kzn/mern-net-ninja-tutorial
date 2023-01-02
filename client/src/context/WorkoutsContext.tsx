import { createContext } from "react";
import { Workout } from "../models/Workout";

export type WorkoutAction =
  | {
      type: "SET_WORKOUTS";
      payload: Workout[];
    }
  | { type: "CREATE_WORKOUT"; payload: Workout }
  | {
      type: "DELETE_WORKOUT";
      payload: Workout;
    };

// Create reducer fonction :
export const workoutsReducer = (
  state: WorkoutState,
  action: WorkoutAction
): typeof initialWorkoutsState => {
  console.log(`
  WorkoutReducer trigger
  Action type: ${action.type}
  Payload : ${JSON.stringify(action.payload)}
  `);

  // Create switch to handle all actions
  switch (action.type) {
    case "SET_WORKOUTS":
      return { workouts: action.payload };
    case "CREATE_WORKOUT":
      return { workouts: [action.payload, ...state.workouts] };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter((w) => {
          console.log(`Payload (current) : ${action.payload._id}
          State : ${w._id}
          `);

          return action.payload._id != w._id;
        }),
      };
    default:
      return state;
  }
};

// CONTEXT

export interface WorkoutState {
  workouts: Workout[];
}

// null value init
export const initialWorkoutsState: WorkoutState = {
  workouts: [],
};

// allow used of reducer
export interface WorkoutsContext {
  state: WorkoutState;
  dispatch: React.Dispatch<WorkoutAction>;
}

export const WorkoutsContext = createContext<WorkoutsContext>({
  state: {
    workouts: [],
  },
  dispatch: () => {},
});
