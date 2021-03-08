import React from "react";

import ImageSearch from "./ImageSearch/ImageSearch";
import ImageList from "./ImageList/ImageList";

import "./style.css";

// const API_kEY = "ece29285-5438-43b3-9c7c-ad1fa09d9c29";

class App extends React.Component {
  state = {
    images: [],
  };

  handleGetRequest = async (event) => {
    event.preventDefault();

    const catId = event.target.id;
    // console.log(event.target.id);

    const url = `https://api.thecatapi.com/v1/images/search?limit=5&category_ids=${catId}`;

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const request = await fetch(url, requestOptions);
    const response = await request.json();

    this.setState({ images: response, catergories: response });
  };

  render() {
    return (
      <div>
        <ImageSearch handleGetRequest={this.handleGetRequest} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
