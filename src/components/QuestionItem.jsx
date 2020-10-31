import React from 'react';
import Answers from './Answers.jsx'

const Question = ({ questionItem, index }) => {
  const {
    question,
    incorrect,
    correct,
  } = questionItem;
  return (
    <div>
  <h2>{index + 1}. {question}</h2>
        <Answers
          incorrect={incorrect}
          correct={correct}
        />
    </div>
  );
};

export default Question;