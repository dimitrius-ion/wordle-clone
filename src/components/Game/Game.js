import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
let guesses = range(0, NUM_OF_GUESSES_ALLOWED);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [wordList, setWordList] = React.useState([]);

  return (
    <>
      <div className="guess-results">
        {guesses.map((guess) => (
          <div key={guess} className="guess-results">
            <Guess
              guess={
                wordList[guess]
                  ? checkGuess(wordList[guess].word, answer)
                  : null
              }
            />
          </div>
        ))}
      </div>
      {wordList.length < NUM_OF_GUESSES_ALLOWED && (
        <Input setWordList={setWordList} />
      )}
    </>
  );
}

export default Game;
