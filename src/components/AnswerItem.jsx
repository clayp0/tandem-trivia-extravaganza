import React from 'react';

const AnswerItem = ({
  text,
  correct,
  setScore,
  score,
  nextQ
 }) => {
  const isCorrect = () => {
    if (text === correct) {
      setScore(score + 1)
    }
    nextQ();
  }

  return (
    <div>
      <button onClick={isCorrect}>{text}</button>
    </div>
  );
}

export default AnswerItem;