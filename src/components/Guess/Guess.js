import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
let letters = range(0, 5);

function Guess({ guess }) {
  return (
    <p className="guess">
      {letters.map((letter) => (
        <span
          key={letter}
          className={"cell " + (guess && guess[letter].status)}
        >
          {guess && guess[letter].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
