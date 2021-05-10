// import "./styles.css";
import React, { useState, useEffect } from "react";

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
    <main className="textColor">
      <p> Setinterval.</p>
      <h1 style={{ color: iscolor }}>I change color every 3 seconds.</h1>
    </main>
  );
}
