
import React from 'react'

import PropTypes from 'prop-types'
import { TodoListItem } from './TodoListItem'


export const TodoList = ({ todos = [], handleDelete, handleToggle }) => {

    return (
        <ul>
            {
                todos.map( (todo, i) => (
                    <TodoListItem 
                        key={ todo.id }
                        todo= { todo }
                        index= { i }
                        handleToggle={ handleToggle } 
                        handleDelete={ handleDelete }
                    />
                ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDelete: PropTypes.func,
    handleToggle: PropTypes.func
}