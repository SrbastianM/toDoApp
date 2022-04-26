import React from "react";
import "../style/ToDoList.css";

function ToDoList(props) {
  return (
    <div className="cardContainer">
      <div className="card Front">
        <h5>Insert what will you do!</h5>
        <input placeholder="Hey, click me! :)" />

        <button type="submit" className="toDoButton">
          Submit
        </button>
      </div>
      <div className="card Back">
        <ul>{props.children}</ul>
      </div>
    </div>
  );
}

export { ToDoList };
