
import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('me volvi a generar D: ')
    
    return (
        <button
            className='btn btn-danger'
            onClick={ () => {
                increment();
            }}
        >
            incrementar
        </button>
    );
});
