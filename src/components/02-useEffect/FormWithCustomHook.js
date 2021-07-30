import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import './effects.css'
import { Message } from './Message'


export const FormWithCustomHook = () => {

    const [ values , handleImputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = values
    
    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(values)
    }

    useEffect(() => {
        console.log('Email cambió....')
    }, [email])


    return (
        <form onSubmit={ handleSubmit }>
          <h1>FormWithCustomHook</h1>  
          <hr/>
          
          <div>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={ name }
                onChange={ handleImputChange }
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
                onChange={ handleImputChange }
              />
          </div>

          <div>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="*****"
                autoComplete="off"
                value={ password }
                onChange={ handleImputChange }
              />
          </div>
          <button type="submit" className="btn btn-primary">Guardar</button>

        </form>
    )
}
