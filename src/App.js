import React from "react";
import { AppUI } from "./components/AppUI";
import { ToDoProvider } from "./components/ToDoContext";

// const defaultToDo = [
//    { text: "Escucho a un bebe llorar en mi casa", completed: false },
//    { text: "Me levanto a revisar", completed: false },
//    { text: "*Vivo solo*", completed: true },
// ];

function App() {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
