import React from "react";
import "../style/ToDoList.css";

function ToDoList(props) {
  return (
    <div className="lorem">
      <div className="cardList">
        <ul>{props.children}</ul>
      </div>
    </div>
  );
}

export { ToDoList };
