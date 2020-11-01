import React from 'react';
import { useState } from 'react';
import Question from './QuestionItem.jsx';
import QuestionList from './QuestionList.jsx'
const questions = require('../assets/Apprentice_TandemFor400_Data.json')


const App = () => {
  const [score, setScore] = useState(0)
  return (
    <div>
      <h1>BEHOLD! QUESTIONS!</h1>
      <h2>You currently have {score} points</h2>
      <QuestionList
      questions={questions}
      setScore={setScore}
      score={score}
      />
    </div>
  );
};

export default App;
