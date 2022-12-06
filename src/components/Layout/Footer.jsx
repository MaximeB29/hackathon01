import React from "react";

function Footer() {
  return (
    <div className="font-Inter bg-gradient-to-r from-[#BDE0FE] to-[#E2F1FF]">
      <div className="flex justify-around p-6">
        <div className="flex items-center h-24">
          <p className="font-Inter">©Find My Trip</p>
        </div>
      </div>
      <div className="flex justify-around mb-3">
        <p className="text-xs">Mentions légales</p>
        <p className="text-xs">CGU</p>
        <p className="text-xs">MEKS - 2022</p>
      </div>
    </div>
  );
}

export default Footer;
