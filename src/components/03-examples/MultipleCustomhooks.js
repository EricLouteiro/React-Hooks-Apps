import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './styles.css';

export const MultipleCustomhooks = () => {

    const { state, increment } = useCounter( 1 )

    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${state}` )
    // 

    const { author, quote } = !!data && data[0];

    // console.log(data);

    return (
        <>
          <h1> BreakingBad Quotes </h1>
          <hr />

        {
            loading 
                ? 
                (
                    <div className='animate__animated animate__fadeInDown text-center'  >
                        Loading...
                    </div>

                )
                :
                ( 
                    <blockquote className="blockquote text-right">
                        <p className="mb-3"> { quote } </p>
                        <footer className="blockquote-footer"> { author } </footer>
                    </blockquote>
                )
        }

        <button 
            className='btn btn-secondary'
            onClick={ increment }
            > Siguiente 
        </button>
        </>
    )
}
