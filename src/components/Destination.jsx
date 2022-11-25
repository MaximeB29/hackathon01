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
    <div className="bg-[#A6C4F2] bg-cover">
      <div className="pt-10">
        {id != 2 ? (
          <h1 className="text-9xl font-Inter text-center pb-10">
            {destination.name}
          </h1>
        ) : (
          <h1 className="text-9xl font-Inter text-center pb-10">
            A Lille chez Maurice
          </h1>
        )}
      </div>
      <div>
        <p className="text-sm font-Inter text-center mx-40 pb-5 md:text-xl">
          {destination.description}
        </p>
      </div>
      <div className="flex flex-col items-center space-y-5 py-10">
        {id != 2 ? (
          <img
            className="w-2/3 shadow-lg shadow-gray-500 rounded-3xl"
            src={destination.pic1}
            alt="first pic"
          />
        ) : (
          ""
        )}
        <img
          className="w-2/3 shadow-lg shadow-gray-500 rounded-3xl"
          src={destination.pic2}
          alt="second pic"
        />
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
