import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ToDoInput from './ToDoInput';
import DisplayToDoList from './DisplayToDoList';

export default function ToDoList() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewToDo] = useState("");
  const [display, setDisplay] = useState(false)



  function addTask(newTask) {
    // Check if the task is not empty or just spaces
    if (newTask.trim() !== "") {
      setTodo((prev) => [...prev, { task: newTask, id: uuidv4(), completed: false }]);
      setDisplay(true)
      setNewToDo(""); // Clear the input after adding
    }
  }

  function deleteTodo(id) {
    setTodo(todo.filter((task) => task.id !== id));
  }

  function updateToDoValue(value) {
    setNewToDo(value);
  }

  function markAsDone(id) {
    setTodo(todo.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  }

  function markAsDoneAll() {
    setTodo(todo.map((task) => ({ ...task, completed: !task.completed })));
  }

  return (
    <>
      <ToDoInput
        newTodo={newTodo}
        updateToDoValue={updateToDoValue}
        addTask={addTask}
      />
      <hr></hr>
      {display &&
        <DisplayToDoList
          todo={todo}
          deleteTodo={deleteTodo}
          markAsDone={markAsDone}
          markAsDoneAll={markAsDoneAll}
        />
      }


    </>
  );
}
