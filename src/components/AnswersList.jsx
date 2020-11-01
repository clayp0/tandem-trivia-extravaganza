import React from 'react';
import AnswerItem from './AnswerItem.jsx'

const AnswersList = ({
  incorrect,
  correct,
  setScore,
  score
}) => {
  const allAnswers = incorrect.concat(correct);
  return (
    <div>
      {allAnswers.map((answer, index) => (
        <AnswerItem
        text={answer}
        correct={correct}
        key={index}
        index={index}
        setScore={setScore}
        score={score}
        />
      ))}
    </div>
  );
}

export default AnswersList;