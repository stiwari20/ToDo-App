import React, { useState } from "react";
import "./Todo.css";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  const [arr, setArr] = useState([{ name: "Sample task", id: uuidv4() }]);
  const [newTask, setTask] = useState("");

  const updateTask = (event) => {
    setTask(event.target.value);
  };

  const handleClick = () => {
    setArr((prevArr) => {
      return [...prevArr, { name: newTask, id: uuidv4() }];
    });
    setTask("");
  };

  const deleteTask = (id) => {
    setArr((prevArr) => prevArr.filter((task) => task.id !== id));
  };

  const editTask = (task, id) => {
    setTask(task.name);
    deleteTask(id);
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
          <div className=" d-flex justify-content-center align-items-center mb-4">
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
              Add
            </button>
          </div>
          {arr.map((task) => {
            return (
              <div
                className="container todo-container text-center"
                key={task.id}
              >
                <div className="row align-items-center">
                  <div className="col-8 mb-1 text-start">{task.name}</div>
                  <div className="col-4 mb-1 text-end">
                    <FontAwesomeIcon
                      className="px-3"
                      data-toggle="tooltip"
                      title="Edit"
                      icon={faPenToSquare}
                      onClick={() => editTask(task, task.id)}
                    />
                    <FontAwesomeIcon
                      data-toggle="tooltip"
                      title="Delete"
                      icon={faTrash}
                      onClick={() => deleteTask(task.id)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;

{
  /* <div className="container text-center w-50">
  <div className="row">
    <div className="col-1 mb-1">
      <li className="todo-list" key={task.id}></li>
    </div>
    <div className="col-6 mb-1">{task.name}</div>
    <div className="col mb-1">
      <FontAwesomeIcon icon={faTrash} />
    </div>
  </div>
</div>; */
}
{
  /* <li className="todo" key={task.id}>
  {task.name} <FontAwesomeIcon icon={faTrash} />
</li>; */
}
