import React from "react";
import { useParams } from "react-router-dom";
import Destinations from "./DbDestination";

function Destination() {
  const { id } = useParams();
  const getDestination = (destinationId) =>
    Destinations.find((item) => item.id === parseInt(id));
  const destination = getDestination(id);

  console.log(id);

  return (
    <div>
      <div className="pt-10">
        <h1 className="text-2xl text-center pb-10">{destination.name}</h1>
      </div>
      <div>
        <p className="text-xl text-center mx-20 pb-5">
          {destination.description}
        </p>
      </div>
      <div className="flex flex-col items-center py-10">
        <img className="w-1/2 h-80" src={destination.pic1} alt="first pic" />
        <img className="w-1/2 h-80" src={destination.pic2} alt="second pic" />
      </div>
    </div>
  );
}

export default Destination;
