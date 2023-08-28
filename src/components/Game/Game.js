import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [wordList, setWordList] = React.useState([]);
  return (
    <>
      <div className="guess-results">
        {wordList.map(({ word, key }) => (
          <p key={key} className="guess">
            {word}
          </p>
        ))}
      </div>
      <Input setWordList={setWordList} />
    </>
  );
}

export default Game;
