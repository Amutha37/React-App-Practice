import React from "react";

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    // if the count list is greater that on at and 's' at the end of the title
    if (this.props.children instanceof Array) {
      titleText += "s";
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul> {this.props.children} </ul>
      </div>
    );
  }
}
