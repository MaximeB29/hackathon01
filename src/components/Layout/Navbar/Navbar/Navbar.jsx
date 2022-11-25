import React from "react";
import { Link } from "react-router-dom";
import fmt from "../../../../assets/logo/logo.png";
import search from "../../../../assets/logo/search.png";

function Navbar() {
  return (
    <div className="bg-[#F5F5F5] h-32 font-Inter w-full ">
      <div className="flex items-center justify-around">
        <img className="h-32" src={fmt} alt="logo fmt" />
        <div className="flex ml-4"></div>
        <Link to="/">A PROPOS</Link>
        <Link to="/">TARIFS</Link>
        <Link to="/">CONTACT</Link>
        <div className="flex items-center justify-center bg-black h-14 w-14 rounded-full">
          <img className="h-5" src={search} alt="logo search" />
        </div>
        <div className="flex items-center justify-center bg-black h-16 w-64 rounded-full">
          <p className="text-white">ME CONNECTER</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
