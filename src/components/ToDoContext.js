import React from "react";
import { useLocalStorage } from "./UseLocalStorage";

const ToDoContext = React.useContext();

function ToDoProvider() {
  const {
    item: toDo,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [textInput, setInputValue] = React.useState("");

  const completeTasks = toDo.filter((toDo) => !!toDo.completed).length; //Objeto en Default toDo
  const totalTask = toDo.length;

  let searchedTodos = [];

  if (!textInput.length >= 1) {
    searchedTodos = toDo;
  } else {
    searchedTodos = toDo.filter((toDo) => {
      const toDoText = toDo.text.toLowerCase();
      const toDoInput = textInput.toLowerCase();
      return toDoText.includes(toDoInput);
    });
  }

  const checkCompleteTasks = (text) => {
    const toDoIndex = toDo.findIndex((toDo) => toDo.text === text);
    const newArrToDo = [...toDo];
    newArrToDo[toDoIndex].completed = true;
    saveToDos(newArrToDo); //Seteamos un nuevo arreglo con nuevas propiedades
  };

  const deleteTasks = (text) => {
    const toDoIndex = toDo.findIndex((toDo) => toDo.text === text);
    const newArrToDo = [...toDo];
    newArrToDo.splice(toDoIndex, 1);
    saveToDos(newArrToDo); //Seteamos un nuevo arreglo con nuevas propiedades
  };

  return (
    <ToDoContext.Provider
      value={{
        loading,
        error,
        totalTask,
        completeTasks,
        textInput,
        setInputValue,
        searchedTodos,
        checkCompleteTasks,
        deleteTasks,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoProvider };
