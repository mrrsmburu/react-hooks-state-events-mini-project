import React from "react";

function NewTaskForm() {
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
        <TaskForm categories={categories} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasks} />
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
