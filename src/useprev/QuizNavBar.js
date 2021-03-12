import React, { useState } from "react";

export default function QuizNavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // define event handlers
  const goBack = () => {
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);
    // < p > { questions.questonsIndex }</p >
  };

  // next question depends on the previours state
  const goToNext = () => {
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
    <p>{questions.questonsIndex}</p>;
  };
  // determine if on the first question or not

  const onFirstQuestion = questionIndex === 0;

  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <span class="questionNumber">Question #{questionIndex + 1}</span>
      {/* <span class="questionNumber">Question #{questions}</span> */}
      <div>
        <button onClick={goBack} disabled={onFirstQuestion}>
          Go Back
        </button>
        <button disabled={onLastQuestion} onClick={goToNext}>
          Next Question
        </button>
      </div>
    </nav>
  );
}
