import React from "react";
import { Link } from "react-router-dom";
import Destinations from "../components/DbDestination";

export default function AllDestinations() {
  return (
    <div>
      <h1 className="m-5">DESTINATIONS</h1>
      <div className="  ">
        <div className="grid grid-cols-2  gap-2 m-2  md:grid-cols-3  ">
          {Destinations.map((destination) => (
            <button className="flex flex-col items-center rounded-xl p-3 shadow-lg shadow-slate-400">
              <Link to={`/destination/${destination.id}`} className="">
                {destination.name}
              </Link>
              <img
                className="rounded-xl w-3/4 h-2/3  md:h-3/4 "
                src={destination.pic1}
                alt="pics"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
