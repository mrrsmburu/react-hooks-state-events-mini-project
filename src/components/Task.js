import React from "react";

function Task() {
  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
      <p>{task.text}</p>
      <p>Category: {task.category}</p>
    </div>
  );
}

export default Task;
