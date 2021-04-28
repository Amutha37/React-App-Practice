import React from "react";

import ImageSearch from "./ImageSearch/ImageSearch";
import ImageList from "./ImageList/ImageList";

import "./style.css";

const urlSearch = "https://api.thecatapi.com/v1/images/search";

class App extends React.Component {
  state = {
    images: [],
    error: null,
  };

  handleGetRequest = async (event) => {
    event.preventDefault();

    const catId = event.target.id;

    const url = `${urlSearch}?limit=5&category_ids=${catId}&api_key=${process.env.REACT_APP_API_kEY}`;

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
