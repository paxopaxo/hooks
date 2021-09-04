import React, { useContext } from 'react'
import { userContext } from './UserContext'

export const LoginScreen = () => {

    // Obtener la referencia a useContext
    const { user, setUser } = useContext(userContext)
    // setUser


    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button
                className='btn btn-primary'
                onClick={ () => setUser({ user:'paxo', id: 1234 })}
            >
                Paxo STATe
            </button>

        </div>
    )
}
