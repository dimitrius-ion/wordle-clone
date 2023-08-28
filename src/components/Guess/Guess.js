import React from "react";
import { range } from "../../utils";
let letters = range(0, 5);

function Guess({ guess }) {
  return (
    <p className="guess">
      {letters.map((letter) => (
        <span key={letter} className="cell">
          {guess && guess.word.split("")[letter]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
