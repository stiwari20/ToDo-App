import React, { useState } from "react";
import "./Todo.css";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [arr, setArr] = useState([{ name: "Sample task", id: uuidv4() }]);
  const [newTask, setTask] = useState("");

  const updateTask = (event) => {
    setTask(event.target.value);
  };

  const handleClick = () => {
    setArr((prevArr) => {
      return [...prevArr, newTask];
    });
    setTask("");
  };

  return (
    <>
      <div className="container inp-container text-center">
        <div className=" my-2">
          <h1 className="heading">Your Daily Todo List</h1>
        </div>

        <div className=" todo-area d-flex flex-column justify-content-center align-items-center">
          <label htmlFor="task-item" className="form-label h4 mt-3">
            Add your Task
          </label>
          <div className=" d-flex mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Add Todo"
              name="task-item"
              id="task-item"
              value={newTask}
              onChange={updateTask}
            />
            <button onClick={handleClick} className="btn btn-primary">
              Add{" "}
            </button>
          </div>
          {arr.map((task) => {
            return <li key={task.id}>{task.name}</li>;
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
