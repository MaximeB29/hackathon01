import React from "react";
import { Link } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

function Home() {
  return (
    <div className="flex flex-col items-center my-2">
      <h1>Vous ne savez pas où partir en voyage ?</h1>
      <Link to={"/quiz"} element={<Quiz />}>
        <button
          className="bg-[#6caad9] rounded-xl px-2 shadow-md"
          type="button"
        >
          Faites le quiz
        </button>
      </Link>
    </div>
  );
}

export default Home;
