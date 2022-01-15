
import React, { useEffect, useState } from 'react'
import './effects.css';
import { Message } from './Message';

export const SimpleForms = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        // console.log('hola');
    }, [] )

    useEffect( () => {
        // console.log('name');
    }, [name] );

    useEffect( () => {
        // console.log('email');
    }, [email] );
    
    const handleInputCahnge = ({ target }) => {

        setFormState({
            ...formState,
            [ target.name ]: target.value
        })

    }
    
    
    return (
        <>
              <h1>Simple Form</h1>
              <hr />

              <div>
                  <input
                    type="text"
                    name="name"
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputCahnge }
                    >
                  </input>

                  <input
                    type="text"
                    name="email"
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputCahnge }
                    >
                  </input>
              </div>

              { ( name === '123') && <Message /> }
               
        </>
    )
}
