import React, { useState } from 'react';
import AnswerItem from './AnswerItem.jsx'

const AnswersList = ({
  incorrect,
  correct,
  setScore,
  score,
  nextQ,
  setShowCorrect,
  setShowIncorrect,
  showCorrect,
  showIncorrect
}) => {
  const allAnswers = incorrect.concat(correct);

  
  return (
    <div>
      {allAnswers.map((answer, index) => (
        <div key={index}>
        <AnswerItem
        text={answer}
        correct={correct}
        key={index}
        setScore={setScore}
        score={score}
        nextQ={nextQ}
        setShowCorrect={setShowCorrect}
        showCorrect={showCorrect}
        setShowIncorrect={setShowIncorrect}
        showIncorrect={showIncorrect}
        /><br />
        </div>
      ))}
      {showCorrect && (
        <div>
          <h3>Well, would ya look at that! You got it right!</h3><br />
          <button onClick={nextQ}>Sweet, next question!</button>
        </div>
      )}
      {showIncorrect && (
        <div>
          <h3>Shoot! The correct answer was {correct}</h3><br/>
          <button onClick={nextQ}>Okay, let's go again!</button>
        </div>
      )}
    </div>
  );
}

export default AnswersList;