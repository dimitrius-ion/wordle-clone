import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  console.log(answer);
  const [wordList, setWordList] = React.useState([]);
  const [win, setWIN] = React.useState(false);

  const setWord = (guess) => {
    const value = checkGuess(guess, answer);

    setWordList((prev) => [
      ...prev,
      {
        key: crypto.randomUUID(),
        value,
      },
    ]);
    if (value.filter((f) => f.status === "correct").length === 5) {
      setWIN(true);
    }
  };
  return (
    <>
      <Guess wordList={wordList} />

      <Input
        setWord={setWord}
        disabled={
          wordList.filter((w) => !w.win && w.word).length ===
          NUM_OF_GUESSES_ALLOWED
        }
      />
      {win && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {wordList.length} guesses</strong>.
          </p>
        </div>
      )}
      {wordList.length >= NUM_OF_GUESSES_ALLOWED && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button
            onClick={() => {
              setWordList([]);
              setAnswer(sample(WORDS));
            }}
          >
            Restart Game
          </button>
        </div>
      )}
    </>
  );
}

export default Game;
