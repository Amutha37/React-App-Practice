import React from "react";

export default function InputMessage({
  handleChange,
  handleSubmitt,
  handleReset,
  text,
}) {
  return (
    <form onSubmit={handleSubmitt} onReset={handleReset}>
      <input
        type="text"
        value={text || ""}
        placeholder="Type text  here ..."
        autoComplete="off"
        onChange={handleChange}
      />
      <br />

      <button type="submit" className="imageDisplay">
        Submit
      </button>
      {!text ? null : (
        <button type="reset" value="Reset" className="reset">
          Reset
        </button>
      )}
    </form>
  );
}
