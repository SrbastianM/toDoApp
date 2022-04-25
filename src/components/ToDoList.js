import React from 'react';

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