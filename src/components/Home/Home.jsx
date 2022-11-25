import React from "react";
import { Link, NavLink } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import maurice from "../../assets/images/mauricelille.png";
import AllDestinations from "../AllDestinations";

function Home() {
  return (
    <div className="flex flex-col items-center my-2 font-Inter">
      <h1>Vous ne savez pas où partir en voyage ?</h1>
      <Link to={"/quiz"} element={<Quiz />}>
        <button
          className="bg-[#6caad9] rounded-xl px-2 shadow-md"
          type="button"
        >
          Faites le quiz
        </button>
      </Link>
      <Link to={"/alldestinations"} element={<AllDestinations />}>
        <button>Destianation</button>
      </Link>
      <img src={maurice} alt="maurice à lille" />
    </div>
  );
}

export default Home;
