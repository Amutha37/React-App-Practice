import React from "react";

export default function InputMessage({ handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Type text  here ..."
        // value={text || ""}
        onChange={handleChange}
        autoComplete="off"
        autoFocus="this.value"
      />
      <button type="submit" className="imageDisplay">
        Submit
      </button>
    </form>
  );
}
