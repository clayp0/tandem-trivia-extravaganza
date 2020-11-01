import React from 'react';
import QuestionItem from './QuestionItem.jsx';
import { useState } from 'react';

const QuestionList = ({
  questions,
  setScore,
  score
}) => {
  const round = questions.sort(() => Math.random() - 0.5).slice(0, 10);
  const [currentQ, setCurrentQ] = useState(round[0]);
  const [count, setCount] = useState(0);

  const nextQ = () => {
    console.log("clicked");
    setCount(count + 1);
    setCurrentQ(round[count + 1]);
  };

  return (
    <div>
      <div>
        <QuestionItem
          setScore={setScore}
          score={score}
          questionItem={currentQ}
          index={count}
          key={count}
        />
      </div>
        <div>
          <button onClick={nextQ}>Next question please!</button>
        </div>
    </div>
  );
}

export default QuestionList;