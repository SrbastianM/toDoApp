import React from 'react'

function ToDoItem(props) {
    return (
        <li>
            <span> </span>
            <p>{props.text}</p>
            <span> </span>
        </li>
    );
}

export { ToDoItem };