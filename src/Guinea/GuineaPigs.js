import React from "react";
import PropTypes from "prop-types";

export const GuineaPigs = (props) => {
  let src = props.src;
  return (
    <div>
      <img src={src} alt="" />
    </div>
  );
};

GuineaPigs.propTypes = {
  src: PropTypes.string.isRequired,
};
