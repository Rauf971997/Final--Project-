import React from "react";
import { Link, Form } from "react-router-dom";

const TaskItem = ({ task, handleUpdateTaskStatus }) => (
  <li
    key={task.id}
    className={`task-item ${task.completed ? "completed-task" : ""}`}
  >
    <div className="task-content">
      <Link to={`task/${task.id}`}>
        {task.title ? <>{task.title}</> : <i>No Name</i>}
      </Link>
      <div className="button-container">
        <Link to={`task/${task.id}/edit`}>
          <button type="submit" className="edit-btn">
            <i className="fas fa-edit"></i>
          </button>
        </Link>
        <Form
          method="post"
          action={`task/${task.id}/destroy`}
          onSubmit={(event) => {
            if (
              !window.confirm("Please confirm you want to delete this task.")
            ) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="trash-btn">
            <i className="fas fa-trash"></i>
          </button>
        </Form>
        <button
          className={`check-btn ${task.completed ? "completed" : ""}`}
          onClick={() => handleUpdateTaskStatus(task.id, !task.completed)}
        >
          <i className="fas fa-check"></i>
        </button>
      </div>
    </div>
  </li>
);


