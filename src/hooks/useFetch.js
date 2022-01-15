import { useEffect, useRef, useState } from 'react'


export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    const [state, setState] = useState( {
        loading: true, data: null, error: null
    });

    useEffect( ()=>{

        return () => {
            isMounted.current = false;
        }
    }, [])
    
    useEffect( () => {

        setState({
            loading: true,
            data: null,
            error: null
        });
        if (isMounted) {
            
            fetch( url )
                .then( res => res.json())
                .then( res => {
    
                    setState({
                        data: res,
                        loading: false,
                        error: null
                    });
                });
        }
        
    }, [ url ]);

    return state;
    
}
