import React from "react";

function Input() {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        const input = e.target[0].value.toUpperCase();

        if (input.length != 5) {
          alert("input cant be more then 5 characters");
          return;
        }
        console.log(input);
        e.target[0].value = "";
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
