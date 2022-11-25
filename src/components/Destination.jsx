import React from "react";
import { Link, useParams } from "react-router-dom";
import Destinations from "./DbDestination";
import Quiz from "./Quiz/Quiz";

function Destination() {
  const { id } = useParams();
  const getDestination = (destinationId) =>
    Destinations.find((item) => item.id === parseInt(id));
  const destination = getDestination(id);

  console.log(id);

  return (
    <div>
      <div className="pt-10">
        <h1 className="text-2xl font-Inter text-center pb-10">
          {destination.name}
        </h1>
      </div>
      <div>
        <p className="text-xl font-Inter text-center mx-20 pb-5">
          {destination.description}
        </p>
      </div>
      <div className="flex flex-col items-center py-10">
        <img className="w-1/2 h-80" src={destination.pic1} alt="first pic" />
        <img className="w-1/2 h-80" src={destination.pic2} alt="second pic" />
      </div>
      <Link to={"/quiz"} element={<Quiz />}>
        <button
          type="button"
          className="bg-[#6caad9] rounded-xl px-2 shadow-md"
        >
          Refaire le quiz
        </button>
      </Link>
    </div>
  );
}

export default Destination;
