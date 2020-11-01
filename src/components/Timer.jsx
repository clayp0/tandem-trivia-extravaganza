import React, { useState, useEffect } from 'react';

const Timer = ({
  nextQ,
  correct,
  setShowIncorrect,
  showCorrect,
  showIncorrect
}) => {
  const [seconds, setSeconds] = useState(60);
  const [timeUp, setTimeUp] = useState(true);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setTimeUp(false);
      setShowIncorrect(true);
    }
  }, [seconds]);
  const showTimer = !timeUp || showCorrect || showIncorrect

  return (
    <div>
      {
         !showTimer &&
        <p>You have {seconds} seconds left to answer this question.</p>
      }
      {
        !timeUp &&
        <div>
          <h2>Rats! Out of time!</h2><br />
        </div>
      }
    </div>
  )

}


export default Timer