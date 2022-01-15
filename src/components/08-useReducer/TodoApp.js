
import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { useEffect } from 'react/cjs/react.development';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';

import './styles.css';


const init = () => {

    return JSON.parse( localStorage.getItem('toDos')) || []
    
}

export const TodoApp = () => {

    const [ toDos, dispatch ] = useReducer(todoReducer, [], init);


    useEffect( () => {
        localStorage.setItem('toDos', JSON.stringify( toDos ));
    }, [toDos])

    // console.log(toDos)

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = ( newTodo ) => {

        dispatch( newTodo )
    }
    


    
    return (
        <div>
            <h1> TodoApp { toDos.length } </h1>
            <hr />


            <div className='row'>

                <div className=' col-7'>

                   <TodoList 
                        todos={ toDos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                   />

                </div>

                <div className='col-5'>
                   <AddTodo 
                        handleAddTodo={ handleAddTodo }
                   />
                </div>

            </div>
        
        </div>
    )
}
