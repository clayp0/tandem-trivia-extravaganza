import React from 'react';
import Question from './QuestionItem.jsx';
import QuestionList from './QuestionList.jsx'
const questions = require('../assets/Apprentice_TandemFor400_Data.json')


const App = () => {
  return (
    <div>
      <h1>BEHOLD! QUESTIONS!</h1>
      <QuestionList
      questions={questions}
      />
    </div>
  );
};

export default App;
