import React from "react";
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoList } from "./components/ToDoList";
import { ToDoItem } from "./components/ToDoItem";

const defaultToDo = [
  { text: "Escucho a un bebe llorar en mi casa", completed: false },
  { text: "Me levanto a revisar", completed: false },
  { text: "*Vivo solo*", completed: true },
];

function App() {
  const [toDo, setToDo] = React.useState(defaultToDo);
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

  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoList totalTask={totalTask} completed={completeTasks}>
        <ToDoSearch textInput={textInput} setInputValue={setInputValue} />
        {searchedTodos.map((toDo) => (
          <ToDoItem
            text={toDo.text}
            key={toDo.text}
            completed={toDo.completed} 
            onComplete={() => checkCompleteTasks(toDo.text)}
          />
        ))}
      </ToDoList>
    </React.Fragment>
  );
}

export default App;
