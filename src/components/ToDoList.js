import React from 'react';
import '../style/ToDoList.css'

function ToDoList(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { ToDoList }