import { FC, useReducer } from "react";
import {
  WorkoutsContext,
  initialWorkoutsState,
  workoutsReducer,
} from "../context/WorkoutsContext";

export const WorkoutsProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, initialWorkoutsState);

  return (
    <WorkoutsContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
