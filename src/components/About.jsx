import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="card">
        <div className="card-body ">
          <h5>Overview:</h5>
          <p className="">
            This Todo App is a straightforward, user-friendly application built
            with React, designed to help users manage their tasks efficiently.
            It allows users to add, edit, and delete tasks with ease. The
            application features a clean and intuitive interface, making task
            management both simple and enjoyable.
          </p>
          <h5>Features:</h5>
          <h6>1. Task Addition:</h6>
          <li>Users can add new tasks through a text input field.</li>
          <li>
            Each task can be given a descriptive name to help users remember
            what needs to be done.
          </li>
          <br />
          <h6>2. Task Editing:</h6>
          <li>Existing tasks can be edited directly from the task list.</li>
          <li>
            Users can update the task description and save changes without
            needing to delete and recreate tasks.
          </li>
          <br />
          <h6>3. Task Deletion: </h6>
          <li>Tasks can be removed from the list with a single click.</li>
          <li>
            A confirmation dialog may be included to prevent accidental
            deletions.
          </li>
        </div>
      </div>
    </>
  );
};

export default About;
