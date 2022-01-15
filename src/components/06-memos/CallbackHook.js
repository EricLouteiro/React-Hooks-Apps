
import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

import '../03-examples/styles.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter( counter + 1);
    // }

    const increment = useCallback( () => {
        setCounter( c => c + 1 );
    }, [ setCounter ])
    
    return (
        <div>
            <h1> useCallback Hook </h1>
            <h3> { counter } </h3>
            <hr />

           <ShowIncrement increment={ increment }/>
            

        </div>
    )
}
