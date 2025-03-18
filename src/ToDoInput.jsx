import React from "react";
import './ToDoInput.css'
export default function ToDoInput({ newTodo, updateToDoValue, addTask }) {
  return (
    <div className="input">
      <input
        onChange={(e) => updateToDoValue(e.target.value)}
        value={newTodo}
        id="input"
        placeholder="Enter Task"
      />
      <br></br>
      <button onClick={() => addTask(newTodo)}>Add Task</button>
    </div>
  );
}
