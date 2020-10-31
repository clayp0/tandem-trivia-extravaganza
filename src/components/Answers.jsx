import React from 'react';

const Answers = ({ incorrect, correct }) => {
  return (
    <div>
      {incorrect} {correct}
    </div>
  );
}

export default Answers;