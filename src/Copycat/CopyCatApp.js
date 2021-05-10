import React from "react";

import { CopyCat } from "./CopyCat";

// container component

export default class CopyCatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copying: true,
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleTape = this.toggleTape.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }
  toggleTape() {
    this.setState({ copying: !this.state.copying });
  }

  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape;
    const value = this.state.input;
    const handleChange = this.handleChange;

    return (
      <CopyCat
        copying={copying}
        toggleTape={toggleTape}
        value={value}
        handleChange={handleChange}
      />
    );
  }
}
