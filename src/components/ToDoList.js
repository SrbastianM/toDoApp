import React from "react";
import "../style/ToDoList.css";

function ToDoList(props) {
  return (
    <div className="cardContainer">
      <div className="card Back">
        <ul>{props.children}</ul>
      </div>
    </div>
  );
}

export { ToDoList };
