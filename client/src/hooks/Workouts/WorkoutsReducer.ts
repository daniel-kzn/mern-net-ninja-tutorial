import { Workout } from "../../models/Workout";

export const initialState = {
  workouts: [] as Workout[],
};
// All types of action
enum ACTIONTYPE {
  SET_WORKOUTS = "SET_WORKOUTS",
  UPDATE_WORKOUTS = "CREATE_WORKOUT",
}
type WorkoutAction = {
  type: ACTIONTYPE;
  payload: Workout[];
};

// Create reducer fonction :
export const workoutsReducer = (
  state: typeof initialState,
  action: WorkoutAction
): typeof initialState => {
  const { type, payload } = action;
  const { SET_WORKOUTS, UPDATE_WORKOUTS } = ACTIONTYPE;
  // Create switch to handle all actions
  switch (type) {
    case SET_WORKOUTS:
      return { workouts: payload };
    case UPDATE_WORKOUTS:
      return { workouts: [...payload, ...state.workouts] };
    default:
      return state;
  }
};
