import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const tasks = [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' },
  ];
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
