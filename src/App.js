import React from 'react';
import './App.css';
import { ToDoCounter } from './components/ToDoCounter';
import { ToDoSearch } from './components/ToDoSearch';
import { Button } from './components/Button';
import { ToDoList } from './components/ToDoList';
import { ToDoItem } from './components/ToDoItem';

const toDo = [
    {text: 'Me pegan', completed: false},
    {text: 'Me duele', completed: false},
    {text: 'Llorar a la lloreria', completed: false}
]

function App() {
  
  return (
    <React.Fragment>
      <ToDoCounter /> 
      <ToDoSearch />
      <ToDoList>
          {toDo.map ( toDo => (
              <ToDoItem 
              text={toDo.text}
              key={toDo.text}
              />)
          )}
      </ToDoList>
      <Button />
    </React.Fragment>

  );
}

export default App;
