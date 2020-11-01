import React from 'react';
import { useState } from 'react';
import QuestionItem from './QuestionItem.jsx';
import Timer from './Timer.jsx';

const QuestionList = ({
  questions,
  setScore,
  score
}) => {
  const [round, setRound] = useState(questions.sort(() => Math.random() - 0.5).slice(0, 10));
  const [currentQ, setCurrentQ] = useState(round[0]);
  const [count, setCount] = useState(0);
  const [roundOver, setRoundOver] = useState(false);

  const nextQ = () => {
    setCount(count + 1);
    setCurrentQ(round[count + 1]);
    if (count === 9) {
      setRoundOver(true);
    }
  };

  const newRound = () => {
    setRound(questions.sort(() => Math.random() - 0.5).slice(0, 10));
    setCurrentQ(round[0]);
    setCount(0);
    setRoundOver(false);
    setScore(0)
  }

  return (
    <div>
      {!roundOver && (
      <div>
        <QuestionItem
          setScore={setScore}
          score={score}
          questionItem={currentQ}
          index={count}
          key={count}
          nextQ={nextQ}
        />
      </div>
      )}
      {roundOver && (
        <div>
          <h2>Looks like this round is over!</h2>
          <h3>You finished with a final score of {score} points</h3>
          <button onClick={newRound}>Start a new round?</button>
        </div>
      )}
    </div>
  );
}

export default QuestionList;