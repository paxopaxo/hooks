import React, { useState } from 'react'

export const useForm = ( initialState = {} ) => {

    const [values, setForm] = useState(initialState)
    
    const handleImputChange = ({ target }) => {

        setForm({
            ...values,
            [target.name]: target.value
        })
    }

    return [ values, handleImputChange ]

}
