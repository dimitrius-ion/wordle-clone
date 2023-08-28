import React from "react";

function Input({ setWord, disabled }) {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (inputValue.length != 5) {
          window.alert("Input needs to be 5 characters");
          return;
        }
        setWord(inputValue);
        setInputValue("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(e) => {
          setInputValue(e.target.value.toUpperCase());
        }}
        type="text"
        value={inputValue}
        disabled={disabled}
      />
    </form>
  );
}

export default Input;
