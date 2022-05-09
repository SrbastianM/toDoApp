import React from "react";
import "../style/toDoSearch.css";

export function ToDoSearch ({ textInput, setInputValue }) {
  const onValueChangeSearch = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  return (
    <div className="card Front">
      <h5>Insert what will you do!</h5>
      <textarea
        row="20"
        cols="40"
        placeholder="Hey, click me! :)"
        value={textInput}
        onChange={onValueChangeSearch}
      ></textarea>
      <button className="toDoButton">Submit</button>
    </div>
  );
}
