import { FC } from "react";
import { Link } from "react-router-dom";

const NavBar: FC = () => {
  return (
    <header>
      <Link to="/">
        <div className="flex items-center flex-wrap bg-[#212121] p-6">
          <h1 className="text-white">Home</h1>
        </div>
      </Link>
    </header>
  );
};

export default NavBar;
