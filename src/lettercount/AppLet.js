import React, { useState } from "react";
// import React, { useEffect, useState } from "react";
import InputMessage from "./InputText";
import PrintResult from "./PrintResult";
import "./styleLet.css";

export default function App() {
  const [text, setText] = useState("");
  const handleChange = ({ target }) =>
    setText(target.value.replace(/[^a-zA-Z]/g, "").toLowerCase());

  // console.log(text);

  const [most, setMost] = useState(0);
  const [res, setRes] = useState([]);
  const [status, setStatus] = useState(false);
  let sts = false;
  const handleSubmit = (event) => {
    event.preventDefault();
    let obb = objChar(text);

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
        handleSubmit={handleSubmit}
      />
      {/* this line transfering over to print on list.js I counlt have been using obj.  */}

      <PrintResult
        allResult={res}
        allMost={most}
        allStatus={status}
        allText={text}
      />
      {/* <p>count : {con}</p> */}
    </div>
  );
}
