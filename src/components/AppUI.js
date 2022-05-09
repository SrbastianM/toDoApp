import React from "react";
import { ToDoCounter } from "../components/ToDoCounter";
import { ToDoContext } from "../components/ToDoContext";
import { ToDoSearch } from "../components/ToDoSearch";
import { ToDoList } from "../components/ToDoList";
import { ToDoItem } from "../components/ToDoItem";

function AppUI() {
  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoContext.Consumer>
        {({ error, loading, completeTasks, deleteTasks }) => (
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
        )}
      </ToDoContext.Consumer>
    </React.Fragment>
  );
}

export { AppUI };
