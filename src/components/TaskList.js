import React from "react";

function TaskList() {
  return (
    <div className="tasks">
       {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
