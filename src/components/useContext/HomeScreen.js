import React, { useContext } from 'react'
import { userContext } from './UserContext'

export const HomeScreen = () => {

    const { user, setUser } = useContext( userContext )

    const handleClick = () => {
        setUser({})
    }
    return (
        <div>
            <h1>HomeScreen</h1>
            <hr/>

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button
                className='btn btn-warning'
                onClick={ handleClick }
            >
                Logout
            </button>
        </div>
    )
}
