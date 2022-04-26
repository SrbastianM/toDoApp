import React from "react";
import "../style/ToDoItem.css";

function ToDoItem(props) {
  return (
    <li>
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        o
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">x</span>
    </li>
  );
}

export { ToDoItem };
