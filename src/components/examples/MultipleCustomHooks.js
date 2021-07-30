import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const { state:counter, inc } = useCounter(1)

    const { loading, data } = useFetch( `https://breakingbadapi.com/api/quotes/${ counter }` )
    
    const { author, quote } = !!data && data[0] // Solucionar esto... 

    return (
        <div>
            <h1>Multiple Custom Hooks!!!</h1>
            <hr/>

            {
                loading 
                ? (
                    <div className="alert alert-info text-center">
                    Loading...
                    </div>
                )
                : (
                    <blockquote className="blockquote text-end">
                        <p className="mb-0">{ quote }</p>
                        <footer className="blackquote-footer"> { author }</footer>
                    </blockquote>
                )
            }

            <button
                className="btn btn-primary"
                onClick={ inc }
            >
                Siguiente quote
            </button>

        </div>
    )
}
