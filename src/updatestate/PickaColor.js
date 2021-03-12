import React, { useState } from "react";
import "../styles.css";

const colorNames = [
  "aqua",
  "BlueViolet",
  "turquoise",
  "teal",
  "Thistle",
  "mediumslateblue",
  "SaddleBrown",
  "darkturquoise",
  "cornflowerblue",
];

export default function PickaColor() {
  const [color, setColor] = useState("Tomato");

  const divStyle = { backgroundColor: color };

  return (
    <div className="displayWindow">
      <div style={divStyle}>
        <p>Selected color: {color}</p>
        {colorNames.map((colorName) => (
          <button onClick={() => setColor(colorName)} key={colorName}>
            {colorName}
          </button>
        ))}
      </div>
    </div>
  );
}
