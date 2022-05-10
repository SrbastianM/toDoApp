import React from "react";
import { ToDoCounter } from "../components/ToDoCounter";
import { useToDo } from "../components/ToDoContext";
import { ToDoSearch } from "../components/ToDoSearch";
import { ToDoList } from "../components/ToDoList";
import { ToDoItem } from "../components/ToDoItem";

<<<<<<< HEAD
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
=======
export function AppUI() {
  const {error, loading, textInput, setInputValue, completeTasks, deleteTasks, totalTask, searchedTodos, checkCompleteTasks} = useToDo();
>>>>>>> 88d77cd6e4ef92efe9adecf06671c137aff0f889
  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoList totalTask={totalTask} completed={completeTasks}>
<<<<<<< HEAD
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
=======
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
>>>>>>> 88d77cd6e4ef92efe9adecf06671c137aff0f889
    </React.Fragment>
  );
}
