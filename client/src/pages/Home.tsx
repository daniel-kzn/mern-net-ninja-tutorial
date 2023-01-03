import { FC, useEffect, useContext, useReducer } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <div className="flex min-h-screen justify-center items-center space-x-4">
      <Link to="/login">
        <button className="bg-[#90dbf4] p-4 rounded-lg">Log in</button>
      </Link>
      <Link to="/signup">
        <button className="bg-[#90dbf4] p-4 rounded-lg">Sign up</button>
      </Link>
    </div>
  );
};

export default Home;
