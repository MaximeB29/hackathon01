import React, { useState } from "react";
import Results from "../Results/Results";
import { useParams } from "react-router-dom";
import DbQuestions from "../DbQuestions";

const TOTAL_NUM_QUESTIONS = 10;

function Quiz() {
  const { id } = useParams();
  const getDbQuestion = (DbQuestionId) =>
    DbQuestions.find((item) => item.id === parseInt(id));
  const question = getDbQuestion(id);

  const [currentQuestion, setCurentQuestion] = useState(0);

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

  const handleAnswerOptionCLick = () => {
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
    {endQuiz ? (
      <Results currentAnswer={currentAnswer} />
    ) : (
    <div className="flex flex-col justify-items-center">
      <h1 className="flex justify-center">Mes préferences de voyage</h1>
      <div className="mt-11 ml-60 mb-72 h-60 flex flex-col border  w-1/2 rounded-xl place-content-center p-1 bg-slate-400 shadow-xl">
        <div className="flex justify-center -mt-12">
          <span>Question {currentQuestion + 1}</span>/{TOTAL_NUM_QUESTIONS}
        </div>
        <div className="flex items-start">{randomQuestion.question}</div>
        <div className="flex flex-col items-end gap-2 mt-10">
          {randomQuestion.answers.map((answer) => (
            <button
              className="border ring-slate-400 rounded-lg w-1/2 hover:bg-slate-300 "
              onClick={() => handleAnswerOptionCLick(answer.response)}
            >
              {answer.response}
            </button>
          ))}
        </div>
      </div>
      )}
    <div>
    </div>
  );
}

export default Quiz;
