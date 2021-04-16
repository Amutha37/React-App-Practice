import React, { useState } from "react";

// import React, { useEffect, useState } from "react";
import InputMessage from "./InputText";
import PrintResult from "./PrintResult";
import "./styleLet.css";

export default function App() {
  const [text, setText] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    // e.target.value = "";
    setText("");
    setMost("");
  };

  // let tarText =""
  const handleChange = ({ target }) =>
    setText(target.value.replace(/[^a-zA-Z.!?\\-]/g, " "));

  const [most, setMost] = useState("");
  const [res, setRes] = useState([]);
  const [status, setStatus] = useState(false);
  let sts = false;
  const handleSubmitt = (event) => {
    event.preventDefault();
    let obb = objChar(text.toLowerCase());

    // this return output is printing so the nexline counts should be printing but none is printed
    //counts is printing only after second submit
    let keyy = Object.keys(obb);
    // setKeys(keyy);

    const maxCount = Math.max(...Object.values(obb));
    setMost(maxCount);

    let result = keyy.reduce((resultt, key) => {
      if (obb[key] === maxCount) {
        resultt.push(key);
      }

      return resultt;
    }, []);
    setRes(result);
    sts = result.length > 1 ? true : false;
    setStatus(sts);
  };

  const objChar = (instr) => {
    // convert the string to an array
    return [...instr].reduce(
      (accumulated, currentChar) =>
        // check if character has been seen before
        accumulated.hasOwnProperty(currentChar)
          ? { ...accumulated, [currentChar]: accumulated[currentChar] + 1 } // increase its count by 1
          : { ...accumulated, [currentChar]: 1 }, // add it to the object with a count of 1
      {} // start with an empty object
    );
  };

  return (
    <div className="messageInput">
      <InputMessage
        text={text}
        handleChange={handleChange}
        handleSubmitt={handleSubmitt}
        handleReset={handleReset}
      />
      {/* this line transfering over to print on list.js I counlt have been using obj.  */}

      {most && (
        <PrintResult
          allResult={res}
          allMost={most}
          allStatus={status}
          allText={text}
        />
      )}
    </div>
  );
}
