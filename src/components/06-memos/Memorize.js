
import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

import '../03-examples/styles.css';

export const Memorize = () => {

    const { state, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    
    return (
        <div>

            <h1> Counter: <Small value={ state } /> </h1>
            <hr />

            <button
                className='btn btn-dark mr-4'   
                onClick={ increment } 
            >
                +1
            </button>

            <button 
                className='btn btn-danger ml-3'
                onClick={ () => {
                    setShow( !show )
                }}    
            >ShowAction { JSON.stringify(show) }
            </button>        
        </div>
    )
}
