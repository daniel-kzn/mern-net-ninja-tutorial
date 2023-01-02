import { Children, FC, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { WorkoutsProvider } from "./provider/WorkoutsProvider";

const App: FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <WorkoutsProvider>
              <Home />
            </WorkoutsProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
