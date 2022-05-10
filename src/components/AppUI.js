import React from "react";
import { ToDoCounter } from "../components/ToDoCounter";
import { ToDoContext } from "../components/ToDoContext";
import { ToDoSearch } from "../components/ToDoSearch";
import { ToDoList } from "../components/ToDoList";
import { ToDoItem } from "../components/ToDoItem";

function AppUI() {
  const {
    loading,
    error,
    totalTask,
    completeTasks,
    textInput,
    setInputValue,
    searchedTodos,
    checkCompleteTasks,
    deleteTasks,
  } = React.useContext(ToDoContext);
  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoList totalTask={totalTask} completed={completeTasks}>
        <ToDoSearch />
        {error && <p>Loading the aplication!</p>}
        {loading && <p>Loading the aplication!</p>}
        {!loading && !searchedTodos.lenght && <p>Create your first ToDo</p>}
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
