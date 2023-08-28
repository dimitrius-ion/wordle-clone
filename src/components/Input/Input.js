import React from "react";

function Input({ setWordList }) {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (inputValue.length != 5) {
          alert("input cant be more then 5 characters");
          return;
        }
        setWordList((prev) => [
          ...prev,
          { word: inputValue.toUpperCase(), key: crypto.randomUUID() },
        ]);
        setInputValue("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        onChange={(e) => {
          if (e.target.value.length > 5) {
            return;
          }
          setInputValue(e.target.value);
        }}
        type="text"
        value={inputValue}
      />
    </form>
  );
}

export default Input;
