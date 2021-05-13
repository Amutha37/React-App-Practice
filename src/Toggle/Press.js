import React, { useState } from "react";
// import { togglepressstyles } from "../stylesforall";
import { buttonpressstyle } from "../stylesforall";

export default function Press() {
  const [isPress, setPress] = useState(true);
  return (
    <div>
      <button
        style={buttonpressstyle.buttonpressStyle}
        onClick={() => setPress(!isPress)}
      >
        {" "}
        Press me... if you dare{" "}
      </button>
      <p style={buttonpressstyle.buttonpresspStyle}>
        {" "}
        {!isPress ? "Modules are fancy!" : " "}
      </p>
    </div>
  );
}
