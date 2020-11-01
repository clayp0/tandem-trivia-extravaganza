import React, { useState, useEffect } from 'react';

const Timer = ({
  nextQ,
  correct
}) => {
  const [seconds, setSeconds] = useState(60);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setTimeUp(true)
    }
  }, [seconds]);

  return (
    <div>
      {
        !timeUp &&
        <p>You have {seconds} seconds left to answer this question.</p>
      }
      {
        timeUp &&
        <div>
          <h2>Rats! Out of time! <br /> The correct answer was {correct} </h2><br />
          <button onClick={nextQ}>I'll get 'em next time</button>
        </div>
      }
    </div>
  )

}






// const Timer = ({ nextQ }) => {
//   const [seconds, setSeconds] = useState(60)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (seconds > 0) {
//         setSeconds(seconds => seconds - 1);
//       } else {
//         nextQ();
//         setSeconds(60);
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <p>You have {seconds} seconds left to answer this question.</p>
//     </div>
//   );
// }

export default Timer