import React from "react";

const keys = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];
function Keyboard({ entered }) {
  console.log({ entered });
  return (
    <div>
      {keys.map((row, ind) => (
        <div style={{ textAlign: "center" }} key={"row_" + ind}>
          {row.map((l) => (
            <div key={l} className={"key " + entered[l.toUpperCase()]}>
              {l}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
