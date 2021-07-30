import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message'


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState
    
    useEffect(() => {
        console.log('Hey!')
    }, [] ) 
    
    useEffect(() => {
        // console.log('FormState cambió')
    }, [formState] ) 
    
    // Cuando está el array vacío solo se ejecuta la primera vez
    
    useEffect(() => {
        // console.log('email cambió')
    }, [email] ) 

    const handleInputChange = ({ target }) =>{

        setFormState({
            ...formState,
            [ target.name ]: target.value // El [] en el nombre del objeto sirve para computar el valor (String)
        })

    }
    
    return (
        <>
          <h1>useEffect</h1>  
          <hr/>
          
          <div>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={ name }
                onChange={ handleInputChange }
              />
          </div>

          <div>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Tu correo"
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange }
              />
          </div>

          { ( name === '123' ) && <Message/>}
        </>
    )
}
