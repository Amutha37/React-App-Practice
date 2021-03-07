import React from "react";
import "./ImageList.css";

const ImageList = (props) => {
  console.log(props);

  return (
    <div className="container">
      <div className="row">
        {props.images.map(({ id, url }) => {
          return (
            <div key={id} className="col-md-4" style={{ marginBottom: "2rem" }}>
              <div className="imageList__container">
                <img className="imageList__image" src={url} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageList;
