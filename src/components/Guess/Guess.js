import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ wordList }) {
  return (
    <div className="guess-results">
      {range(6).map((num) => (
        <div key={num} className="guess-results">
          <p className="guess">
            {range(5).map((l) => (
              <span
                key={l}
                className={
                  "cell " + (wordList[num] && wordList[num].value[l].status)
                }
              >
                {wordList[num] && wordList[num].value[l].letter}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Guess;
