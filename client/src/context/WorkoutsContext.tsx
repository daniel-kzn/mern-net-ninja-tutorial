import React, { createContext, useReducer } from "react";
import { Workout } from "../models/Workout";
import {
  initialState,
  workoutsReducer,
} from "../hooks/Workouts/WorkoutsReducer";

export const WorkoutsContext = createContext(initialState);

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, initialState);
  return (
    <WorkoutsContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
