import React from "react";
import { Link, NavLink } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import bghome from "../../assets/bg/bg-home.png";
import AllDestinations from "../AllDestinations";

function Home() {
  return (
    <div className="bg-[#A6C4F2] w-screen h-screen">
      <div className="flex justify-around py-20">
        <div className="flex flex-col bg-[#8BB2ED] w-[700px] items-center font-Inter shadow-2xl shadow-gray-500 rounded-2xl py-6">
          <h1 className="text-lg">
            Vous recherchez un voyage unique, qui vous ressemble ?
          </h1>
          {/* <hr className="dark:bg-gray-700" /> */}
          <div className="border-black"></div>
          <p className="text-lg mx-14 my-6">
            La FMT est à votre écoute pour vous proposer une large sélection de
            destinations, grâce à notre quiz vous allez pouvoir trouver un
            voyage a votre image...
          </p>
          <div className="pt-4">
            <img
              className="w-[600px] rounded-3xl"
              src={bghome}
              alt="background home"
            />
          </div>
        </div>
        <div className="flex flex-col justify-evenly">
          <Link to={"/quiz"} element={<Quiz />}>
            <button
              className="bg-[#8BB2ED] rounded-xl shadow-md shadow-gray-500 text-[40px] p-6"
              type="button"
            >
              QUIZ
            </button>
          </Link>
          <Link to={"/alldestinations"} element={<Quiz />}>
            <button
              className="bg-[#8BB2ED] rounded-xl shadow-md shadow-gray-500 text-[40px] p-6"
              type="button"
            >
              DESTINATIONS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
