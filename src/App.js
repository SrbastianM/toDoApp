import React from "react";
import { AppUI } from "./components/AppUI";

// const defaultToDo = [
//   { text: "Escucho a un bebe llorar en mi casa", completed: false },
//   { text: "Me levanto a revisar", completed: false },
//   { text: "*Vivo solo*", completed: true },
// ];

function App() {
  const localStorageToDo = localStorage.getItem('TODO_V1');
  let parsedToDo;

  if(!localStorageToDo) {
    localStorageToDo.setItem('TODO_V1', JSON.stringify([]));
    parsedToDo = [];
  } else {
    parsedToDo = JSON.parse(localStorageToDo);
  }

  const [toDo, setToDo] = React.useState(parsedToDo);
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
    setToDo(newArrToDo); //Seteamos un nuevo arreglo con nuevas propiedades
  };

  const deleteTasks = (text) => { 
    const toDoIndex = toDo.findIndex((toDo) => toDo.text === text); 
    const newArrToDo = [...toDo];
    newArrToDo.splice(toDoIndex, 1);
    setToDo(newArrToDo); //Seteamos un nuevo arreglo con nuevas propiedades
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
