import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {

    const [ { description } , handleInputChange, reset ] = useForm({
        description: ''
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if( description.trim().length <= 1 ) {
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo( newTodo )
        reset()
    }


    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={ (e) => handleSubmit(e, ) } >
                <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={ description }
                    onChange={ handleInputChange }
                    placeholder="Aprender... "
                />
                <button 
                    className="btn btn-outline-primary mt-1 btn-control"
                    type="submit"
                >
                    Agregar
                </button>
            </form>  
        </>
    )
}


