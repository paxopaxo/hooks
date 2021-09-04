import { useState } from 'react'

export const useForm = ( initialState = {} ) => {

    const [values, setForm] = useState(initialState)
    
    const reset = () => {
        setForm( initialState )
    }


    const handleImputChange = ({ target }) => {

        setForm({
            ...values,
            [target.name]: target.value 
        })
    }

    return [ values, handleImputChange, reset ]

}
