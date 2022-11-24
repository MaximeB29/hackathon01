import React, { useState } from "react";
import { DbQuestions } from "/src/components/DbQuestions";

const TOTAL_NUM_QUESTIONS = 10;

function Quiz() {
  const [currentQuestion, setCurentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionCLick = (isclicked) => {
    if (isclicked) {
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < TOTAL_NUM_QUESTIONS) {
      setCurentQuestion(nextQuestion);
    }
    return setOptionChosen(true);
  };

  return (
    <div>
      <h1>QUIZ</h1>
      <div>
        <span>Question {currentQuestion + 1}</span>/{TOTAL_NUM_QUESTIONS}
      </div>
      <div>{DbQuestions[currentQuestion].question}</div>
      <div>
        {DbQuestions[currentQuestion].answers.map((answer) => (
          <button onClick={() => handleAnswerOptionCLick(answer)}>
            {answer.response}
          </button>
        ))}
      </div>

      <div></div>
    </div>
  );
}

export default Quiz;
