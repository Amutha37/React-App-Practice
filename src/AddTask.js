import React from "react";

export default function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputTask">
        <label>Task Name : </label>
        <input
          name="title"
          placeholder="New task"
          value={newTask.title || ""}
          onChange={handleChange}
        />
      </div>
      {!newTask.title ? null : (
        <>
          <div className="taskDetails">
            <textarea
              className="enterTaskDetails"
              name="description"
              placeholder="Details..."
              value={newTask.description || ""}
              onChange={handleChange}
            />
            <button type="submit">Add Task</button>
          </div>
        </>
      )}
    </form>
  );
}
