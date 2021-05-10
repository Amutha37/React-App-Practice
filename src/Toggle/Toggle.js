// import "./styles.css";
import React from "react";

export default function Room() {
  const [isLit, setLit] = React.useState(true);

  return (
    <div className="room">
      the room is {isLit ? "lit" : "dark"}
      <br />
      <button onClick={() => setLit(!isLit)}>flip</button>
    </div>
  );
}
