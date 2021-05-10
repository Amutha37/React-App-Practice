// import "./styles.css";
import React, { useState } from "react";

export default function Press() {
  const [isPress, setPress] = useState(true);
  return (
    <div className="press">
      <button id="secret-button" onClick={() => setPress(!isPress)}>
        {" "}
        Press me... if you dare{" "}
      </button>
      <p className="secret-message"> {!isPress ? "Modules are fancy!" : " "}</p>
    </div>
  );
}
