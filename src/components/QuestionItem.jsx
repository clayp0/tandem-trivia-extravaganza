import React from 'react';
import AnswersList from './AnswersList.jsx'

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
  return (
    <div>
  <h2>{index + 1}. {question}</h2>
        <AnswersList
          setScore={setScore}
          score={score}
          incorrect={incorrect}
          correct={correct}
          nextQ={nextQ}
        />
    </div>
  );
};

export default Question;