import React from "react";
import { classappstyles } from "../stylesforall";

export default class Button extends React.Component {
  render() {
    return (
      <button style={classappstyles.classappbuttonStyle}>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = { text: "I am a button" };
