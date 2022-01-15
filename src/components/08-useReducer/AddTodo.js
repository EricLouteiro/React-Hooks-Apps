import React from 'react'
import { useForm } from '../../hooks/useForm';

export const AddTodo = ({ handleAddTodo }) => {


    const [{ description }, handleInputChange, reset ] = useForm({
        description: ''
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newData = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo({
            type: 'add',
            payload: newData
        });
        
        reset();
    }
    
    return (
        <>
            <h4>Agregar TODO</h4>
            <hr/>

            <form onSubmit={ handleSubmit }>

                <input
                    type='text'
                    name='description'
                    className='form-control'
                    placeholder='Agregar descripcion'
                    autoComplete='off'
                    value={ description }
                    onChange={ handleInputChange }
                />

                <button
                    type='submit'
                    className='btn btn-dark btn-block mt-2 '
                > Agregar </button>
            </form>   
        </>
    )
}
