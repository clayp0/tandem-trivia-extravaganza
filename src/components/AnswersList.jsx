import React, { useState } from 'react';
import AnswerItem from './AnswerItem.jsx'

const AnswersList = ({
  incorrect,
  correct,
  setScore,
  score,
  nextQ
}) => {
  const allAnswers = incorrect.concat(correct);
  const [showCorrect, setShowCorrect ] = useState(false);
  const [ showIncorrect, setShowIncorrect ] = useState(false);

  
  return (
    <div>
      {allAnswers.map((answer, index) => (
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
        />
      ))}
      {showCorrect && (
        <div>
          Well, would ya look at that! You got it right!<br />
          <button onClick={nextQ}>Sweet, next question!</button>
        </div>
      )}
      {showIncorrect && (
        <div>
          Shoot! The correct answer was {correct}<br />
          <button onClick={nextQ}>Okay, let's go again!</button>
        </div>
      )}
    </div>
  );
}

export default AnswersList;