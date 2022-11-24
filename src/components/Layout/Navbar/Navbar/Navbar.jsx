import React from "react";
import { Link } from "react-router-dom";
import fmt from "../../../../assets/logo/logo.png";

function Navbar() {
  return (
    <div className="bg-[#6caad9] h-16 w-full">
      <nav className="flex">
        <ul className="list-none flex items-center ml-2">
          <li>
            <Link to="/">
              <img className="h-14" src={fmt} alt="logo" />
            </Link>
          </li>
          <li className="ml-8">
            <Link to="/quiz">Quiz</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
