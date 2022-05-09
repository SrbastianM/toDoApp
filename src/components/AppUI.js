import React from "react";
import { ToDoCounter } from "../components/ToDoCounter";
import { useToDo } from "../components/ToDoContext";
import { ToDoSearch } from "../components/ToDoSearch";
import { ToDoList } from "../components/ToDoList";
import { ToDoItem } from "../components/ToDoItem";

export function AppUI() {
  const {error, loading, textInput, setInputValue, completeTasks, deleteTasks, totalTask, searchedTodos, checkCompleteTasks} = useToDo();
  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoList totalTask={totalTask} completed={completeTasks}>
            <ToDoSearch textInput={textInput} setInputValue={setInputValue} />
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
