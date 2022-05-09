import React from "react";
import { ToDoCounter } from "../components/ToDoCounter";
import { ToDoSearch } from "../components/ToDoSearch";
import { ToDoList } from "../components/ToDoList";
import { ToDoItem } from "../components/ToDoItem";

function AppUI({
  totalTask,
  completeTasks,
  textInput,
  setInputValue,
  searchedTodos,
  checkCompleteTasks,
  deleteTasks,
}) {
  return (
    <React.Fragment>
      <ToDoCounter total={totalTask} completed={completeTasks} />
      <ToDoList totalTask={totalTask} completed={completeTasks}>
        <ToDoSearch textInput={textInput} setInputValue={setInputValue} />
        {searchedTodos.map((toDo) => (
          <ToDoItem
            text={toDo.text}
            key={toDo.text}
            completed={toDo.completed}
            onComplete={() => checkCompleteTasks(toDo.text)}
            onDelete={() => deleteTasks(toDo.text)}
          />
        ))}
      </ToDoList>
    </React.Fragment>
  );
}

export { AppUI };
