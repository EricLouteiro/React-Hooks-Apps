import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const LayoutEffect = () => {

    const { state, increment } = useCounter( 1 )
    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${state}` )
    // 

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    const { author, quote } = !!data && data[0];


    useLayoutEffect(() => {

        setBoxSize( pTag.current.getBoundingClientRect() );
        
    }, [quote])


    return (
        <>
          <h1> LayoutEffect </h1>
          <hr />

            
        <blockquote className="blockquote text-right">
            <p 
                className="mb-3"
                ref={ pTag }
            > { quote } </p>
            <footer className="blockquote-footer"> { author } </footer>
        </blockquote>

        <button 
            className='btn btn-secondary'
            onClick={ increment }
            > Siguiente 
        </button>

        <pre>
            { JSON.stringify( boxSize, null, 3 ) }
        </pre>
        </>
    )
}
