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
    <div className="bg-cover">
      <div className="pt-10">
        {id != 2 ? (
          <h1 className="text-3xl font-Inter text-center pb-10">
            {destination.name}
          </h1>
        ) : (
          <h1 className="text-3xl font-Inter text-center pb-10">
            A Lille chez Maurice
          </h1>
        )}
      </div>
      <div>
        <p className="text-sm font-Inter mx-4 pb-5">
          {destination.description}
        </p>
      </div>
      <div className="flex flex-col items-center space-y-5 py-10">
        {id != 2 ? <img src={destination.pic1} alt="first pic" /> : ""}
        <img src={destination.pic2} alt="second pic" />
      </div>
      <div className="flex justify-center mb-5">
        <Link to={"/quiz"} element={<Quiz />}>
          <button
            type="button"
            className="bg-gradient-to-r from-[#BDE0FE] to-[#E2F1FF] rounded-xl px-4 py-2 shadow-md"
          >
            Refaire le quiz
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Destination;
