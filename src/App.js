import React from 'react';
import { ToDoCounter } from './components/ToDoCounter';
// import { ToDoSearch } from './components/ToDoSearch';
import { ToDoList } from './components/ToDoList';
import { ToDoItem } from './components/ToDoItem';

const toDo = [
    {text: 'Escucho a un bebe llorar en mi casa', completed: false},
    {text: 'Me levanto a revisar', completed: false},
    {text: '*Vivo solo*', completed: false}
]

function App() {
  
  return (
    <React.Fragment>
      <ToDoCounter /> 
      <ToDoList>
      {/* <ToDoSearch />  */}
          {toDo.map ( toDo => (
              <ToDoItem 
              text={toDo.text}
              key={toDo.text}
              />)
          )}
      </ToDoList>
    </React.Fragment>

  );
}

export default App;
