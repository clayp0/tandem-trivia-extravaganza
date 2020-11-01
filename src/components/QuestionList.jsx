import React from 'react';
import Question from './QuestionItem.jsx';
import { useState } from 'react';

const QuestionList = ({ questions }) => {
  const round = questions.sort(() => Math.random() - 0.5).slice(0, 10);

  // function nextQ() {
  //   console.log("clicked");
  //   setCount(count + 1);
  //   setCurrentQ(round[count]);
  // };

  return (
    <div>
      <div>
  <h1>hello</h1>
    {round.map((questionObj, index) => (
      <Question
        questionItem={questionObj}
        key={index}
        index={index}
      />
    ))}
      </div>
    </div>
  );
}

export default QuestionList;