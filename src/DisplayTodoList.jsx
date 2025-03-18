import React from "react";
import './DisplayToDoList.css'
export default function DisplayToDoList({ todo, deleteTodo, markAsDone, markAsDoneAll }) {
  return (
    <div className="ToDoList">
      <h3>To Do List:</h3>
      <div>
        <ul>
          {todo.map((task) => (
            <li key={task.id}>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.task}
              </span>
              <button onClick={() => deleteTodo(task.id)}>Delete</button>
              <button onClick={() => markAsDone(task.id)}>
                {task.completed ? 'Mark as Undone' : 'Mark as Done'}
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
