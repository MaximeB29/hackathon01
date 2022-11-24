import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-300 h-8">
      <ul className="list-none flex">
        <li className="mx-2">
          <Link to="/">Find my trip</Link>
        </li>
        <li>
          <Link to="/quiz">Quiz</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
