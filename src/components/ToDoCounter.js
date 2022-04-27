import React from 'react';
import '../style/ToDoCounter.css';

function ToDoCounter( {total, completed} ) {
    return (
        <div className='firstRectangule'>
            <div className='secondRectangule'>
                <h1 className='toDoCounterTitle'>To Do App</h1>
            </div>
            <div className='toDoCounterparagraph'>
                <p>
                    Api to sort your tasks, delete and add tasks.
                </p>
                <p>
                    Total Tasks Completeds  {completed} and you have yet to realize {total}
                </p>
            </div>
        </div>
    );
}

export { ToDoCounter };