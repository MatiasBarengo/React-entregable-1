import React from 'react';

const Button = () => {

  
  const changeUser = () => {
    const anotherRandom = Math.floor(Math.random() * quotes.length);
    setIndex(anotherRandom);
  };
  return (
    <div>
      <button onClick={changeUser}></button>
    </div>
  );
};

export default Button;