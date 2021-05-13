// this project is from codecademy guided project
import React from "react";
import { copycatstyles } from "../stylesforall";

// presentational component
const images = {
  copycat:
    "https://content.codecademy.com/courses/React/react_photo_copycat.png",
  quietcat:
    "https://content.codecademy.com/courses/React/react_photo_quietcat.png",
};

export class CopyCat extends React.Component {
  render() {
    // const copying = this.props.copying;
    // const toggleTape = this.props.toggleTape;
    // const value = this.props.value;
    // const handleChange = this.props.handleChange;

    // shorter way
    const { copying, toggleTape, value, handleChange } = this.props;

    return (
      <div style={copycatstyles.copycatdivStyles}>
        <h1 style={{ marginBottom: 80 }}>Copy Cat</h1>
        <input
          style={copycatstyles.copycatinputStyles}
          type="text"
          value={value}
          onChange={handleChange}
        />
        <img
          style={copycatstyles.copycatimgStyles}
          alt="cat"
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
        <p style={copycatstyles.copycatpStyles}>{copying && value}</p>
      </div>
    );
  }
}
