import React, { useState } from "react";
import Results from "../Results/Results";
import { DbQuestions } from "/src/components/DbQuestions";

const TOTAL_NUM_QUESTIONS = 10;

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState([]);
  const [endQuiz, setEndQuiz] = useState(false);
  
  const randomQuestion =
    DbQuestions[Math.floor(Math.random() * DbQuestions.length)];

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
      setCurrentQuestion(nextQuestion);
    }
    return setOptionChosen(true);
  };

  return (
    <div>
      {endQuiz ? (
        <Results currentAnswer={currentAnswer} />
      ) : (
        <div className="flex flex-col justify-items-center h-1/3">
          <div className="flex justify-center border border-slate-400 rounded-xl bg-slate-400 mx-8 md:mx-auto md:w-2/3">
            <span>Question {currentQuestion + 1}</span>/{TOTAL_NUM_QUESTIONS}
          </div>
          
          <div className="my-2">Tu préfères</div>
      <div className="flex flex-col border border-slate-400 mx-8 mb-100 rounded-xl justify-center p-1 bg-slate-400 shadow-gray-400 shadow-xl h-2/3 md:mx-auto md:w-2/3 md:h-4/5">
        <div className=" justify-start mb-10  ">{randomQuestion.question}</div>
        <div className="flex items-end gap-2 mt-10 ">
          {randomQuestion.answers.map((answer) => (
            <button
              className="border bg-white rounded-lg w-2/3 h- flex justify-center items-center mx-5 md:mx-20 md:w-1/3"
              onClick={() => handleAnswerOptionCLick(answer.response)}
            >
              <div>
                <img
                  className=" flex h-5 w-auto "
                  src="/src/assets/images/bousole.png"
                  alt="bousole"
                />
              </div>
              <div> {answer.response}</div>
            </button>
          ))}
        </div>
      </div>  
        </div>
      )}
    </div>
  );
}

export default Quiz;
