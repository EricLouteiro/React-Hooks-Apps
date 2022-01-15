
import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('cargado nuevamente D: ')
    
    return (
        <small>
            { value }
        </small>
    )
});
