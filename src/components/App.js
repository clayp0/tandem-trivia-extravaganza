import React from 'react';
import { useState } from 'react';
import Question from './QuestionItem.jsx';
import QuestionList from './QuestionList.jsx'
const questions = require('../assets/Apprentice_TandemFor400_Data.json')


const App = () => {
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);
  return (
    <div>
      <h1>BEHOLD! QUESTIONS!</h1>
      {!start && (
        <div>
          <h2>Would you care to start a round?</h2>
          <button onClick={() => setStart(true)}>Yes please!</button>
        </div>
      )}
      {start && (
        <div>
          <h2>You currently have {score} points</h2>
          <QuestionList
            questions={questions}
            setScore={setScore}
            score={score}
          />
        </div>
      )}
    </div>
  );
};

export default App;
