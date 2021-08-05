import React, { useEffect, useRef } from 'react'

import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef(null) // Hace referencia al input...
    


    useEffect( () => {
        
        console.log(inputRef)

    }, [ inputRef ])


    const handleClick = () => {
        inputRef.current.select()
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <input
                ref={ inputRef } 
                className="form-control"
                placeholder="Su Nombre"
            />

            <button className="btn btn-outline-dark mt-5" onClick={ handleClick } >
                Focus 
            </button>

        </div>
    )
}
