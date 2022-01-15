

import React, { useState } from 'react'
import { MultipleCustomhooks } from '../03-examples/MultipleCustomhooks'

import '../03-examples/styles.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);
    
    return (
        <>
            <h1> Real Example Ref </h1>
            <hr/>
            {

                show && <MultipleCustomhooks />   

            }

            <button 
                className='btn btn-secondary mt-10'
                onClick={ () => {
                    setShow( !show );
                }}
            > Show Component</button>
        </>
    )
}
