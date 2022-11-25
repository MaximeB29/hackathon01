import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar/Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="w-screen h-screen flex flex-col justify-between bg-[#A6C4F2] bg-cover">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
