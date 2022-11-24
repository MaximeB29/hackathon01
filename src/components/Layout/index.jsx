import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar/Navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
