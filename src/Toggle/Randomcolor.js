// import "./styles.css";
import React, { useState, useEffect } from "react";
import { randomcolorstyles } from "../stylesforall";

export default function RandomColor() {
  const [iscolor, setColor] = useState("");

  const changeToFunkyColor = () => {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    let val = `rgb(${r}, ${g}, ${b})`;
    return val;
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setColor(changeToFunkyColor());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="textColor" style={randomcolorstyles.randomcolordivStyles}>
      <p> Setinterval.</p>
      <h1
        // style={randomcolorstyles.randomcolorh1Styles}
        style={{ color: iscolor, ...randomcolorstyles.randomcolorh1Styles }}
      >
        I change color every 3 seconds.
      </h1>
    </main>
  );
}
