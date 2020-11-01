import React, { useState } from 'react';

const AnswerItem = ({
  text,
  correct,
  setScore,
  score,
  setShowCorrect,
  setShowIncorrect
 }) => {

  const isCorrect = () => {
    if (text === correct) {
      setScore(score + 1)
      setShowCorrect(true);
    } else {
      setShowIncorrect(true);
    }
  }

  return (
      <div>
      <button onClick={isCorrect}>{text}</button>
    </div>

  );
}

export default AnswerItem;