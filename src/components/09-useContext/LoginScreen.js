import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);

    const newUser = {
        id: '1234',
        name: 'EricLouterio'
    }
    
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>

            <button
                className='btn btn-dark'
                onClick={ () => { setUser(newUser)}}
            >
                enviar
            </button>
            
        </div>
    )
}
