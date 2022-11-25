import React from "react";
import { Link } from "react-router-dom";
import Destinations from "../DbDestination";
import Destination from "../Destination";
import Quiz from "../Quiz/Quiz";

function Results({ currentAnswer }) {
  const getDestination = () => {
    const result = Destinations.map((item) => {
      return {
        id: item.id,
        answers: item.key.filter((key) =>
          currentAnswer.find((elt) => key === elt)
        ),
      };
    });

    const destinationId = result.reduce(function (a, b) {
      return a.answers.length > b.answers.length ? a : b;
    }).id;

    return Destinations.find((des) => des.id === destinationId).id;
  };

  const handleReset = () => {
    setEndQuiz(false);
    setCurrentQuestion(0);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <Link
        to={`/quiz/destination/${getDestination()}`}
        element={<Destination />}
      >
        <button
          type="button"
          className="bg-[#6caad9] rounded-xl px-2 shadow-md"
        >
          Découvre ta destination ici
        </button>
      </Link>
      <br />
      <div>Merci d'avoir répondu au quiz !</div>
    </div>
  );
}

export default Results;
