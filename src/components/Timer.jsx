import React, { useState, useEffect } from 'react';

const Timer = ({
  nextQ,
 }) => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      nextQ();
    }
  }, [seconds]);

  return (
    <div>
      <p>You have {seconds} seconds left to answer this question.</p>
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