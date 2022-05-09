import React from "react";
import { AppUI } from "./components/AppUI";

// const defaultToDo = [
//    { text: "Escucho a un bebe llorar en mi casa", completed: false },
//    { text: "Me levanto a revisar", completed: false },
//    { text: "*Vivo solo*", completed: true },
// ];

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(true);
  const [loading, setLoading] = React.useState(true);

  const [item, setItem] = React.useState(initialValue);
  React.useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageToDo =
          typeof window !== "undefined" ? localStorage.getItem(itemName) : null;
        // Custom, hook para realizar el uso del localStorge
        let parsedItem;
        if (!localStorageToDo) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageToDo);
        }
        setItem(parsedItem);
        setLoading(false);
      }, 2000);
    } catch (error) {
      setError(error);
    }
  });

  const saveItem = (newArrItem) => {
    try {
      const stringifyItem = JSON.stringify(newArrItem);
      localStorage.setItem(itemName, stringifyItem);
      setItem(newArrItem);
    } catch (error) {
      setError(error);
    }
  };
  return { item, saveItem, loading, error };
}

function App() {
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
    <AppUI
      loading={loading}
      error={error}
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
