import React, { useState } from "react";
import Results from "../Results/Results";
import { DbQuestions } from "/src/components/DbQuestions";

const TOTAL_NUM_QUESTIONS = 10;

function Quiz() {
  const [currentQuestion, setCurentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState([]);
  const [endQuiz, setEndQuiz] = useState(false);

  const handleAnswerOptionCLick = (isclicked) => {
    if (isclicked) {
      currentAnswer.push(isclicked);
      setCurrentAnswer(currentAnswer);
    }

    const nextQuestion = currentQuestion + 1;
    if (currentAnswer.length === 10) {
      setEndQuiz(true);
    }
    if (nextQuestion < TOTAL_NUM_QUESTIONS) {
      setCurentQuestion(nextQuestion);
    }
    return setOptionChosen(true);
  };

  return (
    <div>
      {endQuiz ? (
        <Results />
      ) : (
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
        </div>
      )}
    </div>
  );
}

export default Quiz;
