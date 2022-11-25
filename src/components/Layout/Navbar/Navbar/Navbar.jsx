import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#6caad9] h-16 flex">
      <ul className="list-none flex items-center ml-2">
        <li>
          <Link to="/">
            <img className="h-14" src="src/assets/logo/logo.png" alt="logo" />
          </Link>
        </li>
        <li className="ml-8">
          <Link to="/quiz">Quiz</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
