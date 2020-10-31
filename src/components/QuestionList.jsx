import React from 'react';
import Question from './QuestionItem.jsx';
import { useState } from 'react';

const QuestionList = ({ questions }) => {
  const round = questions.sort(() => Math.random() - 0.5).slice(0, 10);
  const [currentQ, setCurrentQ] = useState(round[0]);
  const [count, setCount] = useState(0);

  // function nextQ() {
  //   console.log("clicked");
  //   setCount(count + 1);
  //   setCurrentQ(round[count]);
  // };

  return (
    <div>
      <div>
        {round.map((question, index) => (
          <Question
            questionItem={question}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionList;