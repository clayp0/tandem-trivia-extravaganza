import React, { useState } from 'react';

const AnswerItem = ({
  text,
  correct,
  setScore,
  score,
  setShowCorrect,
  showCorrect,
  setShowIncorrect,
  showIncorrect, 
 }) => {

  const isCorrect = () => {
    if (text === correct) {
      setScore(score + 1)
      setShowCorrect(true);
    } else {
      setShowIncorrect(true);
    }
  }

const showAnswer = showCorrect || showIncorrect

  return (
    <div>
      {!showAnswer &&
        <button onClick={isCorrect}>{text}</button>
      }
    </div>
  );
}

export default AnswerItem;