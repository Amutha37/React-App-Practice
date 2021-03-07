import React from "react";

import "./ImageSearch.css";

const ImageSearch = ({ handleGetRequest }) => {
  return (
    <div className="imageSearch">
      {/* <form onSubmit={handleGetRequest}  */}
      <form className="imageSearch__form">
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
      </form>
    </div>
  );
};

export default ImageSearch;
