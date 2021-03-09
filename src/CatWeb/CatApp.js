import React from "react";

import ImageSearch from "./ImageSearch/ImageSearch";
import ImageList from "./ImageList/ImageList";

import "./style.css";

const API_kEY = "ece29285-5438-43b3-9c7c-ad1fa09d9c29";
const urlSearch = "https://api.thecatapi.com/v1/images/search";

class App extends React.Component {
  state = {
    images: [],
    error: null,
  };

  handleGetRequest = async (event) => {
    event.preventDefault();

    const catId = event.target.id;

    const url = `${urlSearch}?limit=5&category_ids=${catId}&api_key=${API_kEY}`;

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const request = await fetch(url, requestOptions);

    if (!request) {
      this.setState({
        error: "It's loading or no longer availabe.",
      });
    } else {
      const response = await request.json();
      this.setState({ images: response, error: null });
    }
  };

  render() {
    return (
      <div className="copyright">
        <h3>Welcome to CAT WEB !</h3>

        <p>&copy;TheCatApi</p>

        <ImageSearch handleGetRequest={this.handleGetRequest} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
