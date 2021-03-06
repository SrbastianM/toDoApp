import React from "react";
import "../style/ToDoItem.css";

function ToDoItem(props) {
  return (
    <li className="toDoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete} 
      >
        o
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>x</span>
    </li>
  );
}

export { ToDoItem };
