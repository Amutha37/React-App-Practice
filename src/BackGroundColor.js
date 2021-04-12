import React, { useState } from "react";
import Select from "react-select";
import "./BackGroundColor.css";

const BackGroundColor = () => {
  const colorOptions = [
    {
      value: 1,
      label: "LightSeaGreen",
    },
    {
      value: 2,
      label: "DarkGoldenrod",
    },
    {
      value: 3,
      label: "Cornflowerblue",
    },
    {
      value: 4,
      label: "Darkturquoise",
    },
    {
      value: 5,
      label: "Mediumslateblue",
    },
    {
      value: 6,
      label: "Teal",
    },
    {
      value: 7,
      label: "RoyalBlue",
    },

    {
      value: 8,
      label: "Turquoise",
    },
  ];
  const [colorr, setColor] = useState("LightSeaGreen");
  const handleChange = (e) => {
    // console.log(`e : ${e.label}`);
    setColor(e.label);
  };

  return (
    <div className="container1" style={{ backgroundColor: colorr }}>
      <div className="backGround">
        <h2>Hello, World! </h2>
        <p>What colour?</p>
        <Select
          options={colorOptions}
          onChange={handleChange}
          label="Choose a color  {colorr}"
        ></Select>
      </div>
    </div>
  );
};

export default BackGroundColor;
