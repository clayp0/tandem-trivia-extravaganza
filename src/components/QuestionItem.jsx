import React, { useState } from 'react';
import AnswersList from './AnswersList.jsx'
import Timer from './Timer.jsx'

const Question = ({
  questionItem,
  index,
  setScore,
  score,
  nextQ
}) => {
  const {
    question,
    incorrect,
    correct,
  } = questionItem;
  const [showCorrect, setShowCorrect] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);
  return (
    <div>
      <h2>{index + 1}. {question}</h2>
      <AnswersList
        setScore={setScore}
        score={score}
        incorrect={incorrect}
        correct={correct}
        nextQ={nextQ}
        setShowCorrect={setShowCorrect}
        showCorrect={showCorrect}
        setShowIncorrect={setShowIncorrect}
        showIncorrect={showIncorrect}
      />
      <div>
        <Timer
          nextQ={nextQ}
          correct={correct}
          showCorrect={showCorrect}
          showIncorrect={showIncorrect}
          setShowIncorrect={setShowIncorrect}
        />
      </div>
    </div>
  );
};

export default Question;