import { Children, FC, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { WorkoutsProvider } from "./context/WorkoutsContext";
import { AuthProdiver } from "./context/AuthContext";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HomeLogged from "./pages/HomeLogged";

const App: FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/user"
          element={
            <AuthProdiver>
              <WorkoutsProvider>
                <HomeLogged />
              </WorkoutsProvider>
            </AuthProdiver>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
