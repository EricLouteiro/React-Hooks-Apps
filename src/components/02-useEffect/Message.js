import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    });

    const { x, y } = coords;
    
    useEffect(() => {

        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y}
            // console.log(coords);
            setCoords( coords );
        }
 
        window.addEventListener('mousemove', mouseMove)
        
        console.log('componente aparece')
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []) 
    
    return (
        <div>
            <h3>Eres Genial .l.</h3>
            <p>
                x = { x } y = { y }
            </p>
        </div>
    )
}
