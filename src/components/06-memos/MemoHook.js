
import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { procesoPesado } from '../../helpers/procesoPesado';

import '../03-examples/styles.css';

export const MemoHook = () => {

    const { state, increment } = useCounter(10);
    const [show, setShow] = useState(true);


    const memoProcesoPesado = useMemo(() => procesoPesado( state ), [ state ])
    
    return (
        <div>

            <h1> MemoHook </h1>
            <hr />

            <h3> Counter: <small> { state } </small> </h3>

            <p> { memoProcesoPesado } </p>

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
