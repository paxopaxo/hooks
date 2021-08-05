import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const Layout = () => {

    const { state:counter, inc } = useCounter(1)
    
    const { data } = useFetch( `https://breakingbadapi.com/api/quotes/${ counter }` )
    
    const { quote } = !!data && data[0] 

    const pTag = useRef()

    useLayoutEffect(() => {
        console.log( pTag.current.getBoundingClientRect() )
        
        // Es como useEffect pero se lanza una vez el ya han terminado las renderizaciones del DOM
    }, [quote])

    return (
        <div>
            <h1>Multiple Custom Hooks!!!</h1>
            <hr/>
           
            <blockquote className="blockquote text-end">
                <p className="mb-0" ref={ pTag } >{ quote }</p>
            </blockquote>

            <button
                className="btn btn-primary"
                onClick={ inc }
            >
                Siguiente quote
            </button>

        </div>
    )
}
 