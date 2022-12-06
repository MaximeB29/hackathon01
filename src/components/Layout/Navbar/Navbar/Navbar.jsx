import React from "react";
import { Link } from "react-router-dom";
import Home from "../../../Home/Home";

function Navbar() {
  return (
    <div className="bg-gradient-to-r from-[#BDE0FE] to-[#E2F1FF] h-32 font-Inter flex justify-end items-center text-2xl p-2">
      <Link to={"/"} element={<Home />}>
        Find my trip
      </Link>
    </div>
  );
}

export default Navbar;
