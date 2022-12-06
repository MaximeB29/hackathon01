import React from "react";
import { Link, NavLink } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import bghome from "../../assets/bg/bg-home.png";
import AllDestinations from "../AllDestinations";

function Home() {
  return (
    <div className="">
      <div className="flex flex-col items-center font-Inter text-lg m-2">
        <div>
          <h1 className="m-1">
            Vous recherchez un voyage unique, qui vous ressemble ?
          </h1>
          <h1 className="m-1">Vous ne savez pas où partir en vacances ?</h1>
          <p className="m-1">
            La FMT est à votre écoute pour vous proposer une large sélection de
            destinations, grâce à notre quiz vous allez pouvoir trouver un
            voyage a votre image...
          </p>
          <div className="py-4">
            <img src={bghome} alt="background home" />
          </div>
        </div>
        <Link to={"/quiz"} element={<Quiz />}>
          <button
            className="bg-gradient-to-r from-[#BDE0FE] to-[#E2F1FF] rounded-xl p-2 m-1"
            type="button"
          >
            C'est parti !
          </button>
        </Link>
        <Link to={"/alldestinations"} element={<Quiz />}>
          <button
            className="bg-gradient-to-r from-[#BDE0FE] to-[#E2F1FF] rounded-xl p-2 m-1"
            type="button"
          >
            Destinations
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
