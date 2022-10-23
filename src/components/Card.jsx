import React from 'react';
import { useState } from 'react'

const Card = ({ quotes }) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(randomIndex);

  const changePhrase = () =>{
    const anotherRandom = Math.floor(Math.random() * quotes.length);
    setIndex(anotherRandom);
  }

  const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",

  ];
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColorIndex]}`;

  return (
    <div className="App" style={{ color: colors[randomColorIndex] }}>
      <div className="card">
        <p className="phrase">{quotes[index].quote}</p>
        <p className="autor">-{quotes[index].author}</p>
        <button onClick={changePhrase} style={{ backgroundColor: colors[randomColorIndex] }}><i className="fa-solid fa-shuffle"></i></button>
      </div>

    </div>
  );
};

export default Card;
