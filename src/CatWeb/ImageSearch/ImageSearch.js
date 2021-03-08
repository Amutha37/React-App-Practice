import React from "react";

import "./ImageSearch.css";

const ImageSearch = ({ handleGetRequest }) => {
  return (
    <div className="imageSearch">
      <h2>Welcome to CAT WEB !</h2>
      <button
        className="imageDisplay"
        name="hats"
        id="1"
        onClick={handleGetRequest}
      >
        hats
      </button>
      <button
        className="imageDisplay"
        name="boxes"
        id="5"
        onClick={handleGetRequest}
      >
        boxes
      </button>
      <button
        className="imageDisplay"
        name="clothes"
        id="15"
        onClick={handleGetRequest}
      >
        clothes
      </button>
    </div>
  );
};

export default ImageSearch;
