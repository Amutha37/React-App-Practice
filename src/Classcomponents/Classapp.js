import React from "react";

import { List } from "./List";
import Button from "./Button";
import { GuineaPigsContainer } from "./GuineaPigsContainer";
import { BookList } from "./BestSeller";

import { classappstyles } from "../stylesforall";

// import "./classstyles.css";
// add additional list to make the cat musicians plural
export default class Classapp extends React.Component {
  render() {
    // let src = this.props.src;
    return (
      <div style={classappstyles.classappdivmarginStyle}>
        <List type="Living Musician">
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type="Living Cat Musician">
          <li>Nora the Piano Cat</li>
          <li>Nala the Piano Dog</li>
        </List>
        <div>
          <BookList />
          <GuineaPigsContainer />
          <Button />
        </div>
      </div>
    );
  }
}
