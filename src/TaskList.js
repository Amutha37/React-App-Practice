import React from "react";
import "./styles.css";
export default function TasksList({ allTasks, handleDelete }) {
  return (
    <div className="taskList">
      <ol>
        {allTasks.map(({ title, description, id }) => (
          <li key={id}>
            <div>
              <h2>{title}</h2>
              <button className="delButton" onClick={() => handleDelete(id)}>
                X
              </button>
            </div>
            {!description ? null : <p>{description}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
}
