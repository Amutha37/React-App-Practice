// import "./styles.css";
import React from "react";
import { fliproomstyles } from "../stylesforall";

export default function Room() {
  const [isLit, setLit] = React.useState(true);

  return (
    <div className="room" style={fliproomstyles.fliproomdivStyles}>
      the room is {isLit ? "lit" : "dark"}
      <br />
      <button
        style={fliproomstyles.fliproombuttonStyles}
        onClick={() => setLit(!isLit)}
      >
        flip
      </button>
    </div>
  );
}
