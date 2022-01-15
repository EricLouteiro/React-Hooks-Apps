
import React from 'react'

export const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {
    return (
        <li
            key={ todo.id }
            className='list-group-item'>
                <p 
                    className={`${ todo.done && 'complete' }`}
                    onClick={ ()=> handleToggle(todo.id) }
                >
                    <strong> { index + 1 }.  { todo.desc } </strong>
                </p>

                <button 
                    className='btn btn-danger'
                    onClick={ () => handleDelete(todo.id) }
                    >
                    Borrar
                </button>
            
        </li>
    )
}
