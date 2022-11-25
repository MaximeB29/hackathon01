import React from "react";

function Footer() {
  return (
    <div className="font-Inter bg-[#F5F5F5]">
      <div className="flex justify-around p-6">
        <div className="flex items-center h-24">
          <p className="font-Inter">©Find My Trip</p>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="border text-xl border-black p-2 rounded-3xl"
            type="button"
          >
            Email
          </button>
          <input
            className="border border-black p-2 rounded-3xl"
            type="text"
            value=""
          />
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
