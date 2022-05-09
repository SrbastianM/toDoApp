import React from "react";
import { AppUI } from "./components/AppUI";

// const defaultToDo = [
//    { text: "Escucho a un bebe llorar en mi casa", completed: false },
//    { text: "Me levanto a revisar", completed: false },
//    { text: "*Vivo solo*", completed: true },
// ];

const localStorageToDo =
  typeof window !== "undefined" ? localStorage.getItem("TODO_V1") : null;

function App() {
  const [loading, setLoading] = React.useState(true);
  const [toDo, setToDo] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      let parsedToDo;
      if (!localStorageToDo) {
        localStorage.setItem("TODO_V1", JSON.stringify([]));
        parsedToDo = [];
      } else {
        parsedToDo = JSON.parse(localStorageToDo);
      }
      setItem(parsedToDo);
      setLoading(false);
    }, 2000);
  });

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

  const saveToDos = (newArrToDo) => {
    const stringifyToDo = JSON.stringify(newArrToDo);
    localStorage.setItem("TODO_V1", stringifyToDo);
    setToDo(newArrToDo);
  };

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
    <AppUI
      totalTask={totalTask}
      completedTasks={completeTasks}
      textInput={textInput}
      setInputValue={setInputValue}
      searchedTodos={searchedTodos}
      checkCompleteTasks={checkCompleteTasks}
      deleteTasks={deleteTasks}
    />
  );
}

export default App;
