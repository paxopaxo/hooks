import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'

import '../02-useEffect/effects.css'

export const MemoHook = () => {

    const { state, inc } = useCounter(50)
    const [show, setShow] = useState(true)
    

    const procesoPesado = ( iteraciones ) => {

        for( let i = 0; i < iteraciones; i++ ) {
            console.log('Ahi vamos.... ')
        }

        return `${ iteraciones } iteraciones llamadas... `

    }
    const memoProcesoPesado = useMemo(() => procesoPesado( state ) , [ state ])
    // UseMemo lo que hace es memorizar el componente que ya ha sido renderizado anteriormente y unicamente volver a renderizarlo en el caso
    // de que haya un cambio en la dependencia (input), en este caso en el state..

    return (
        <div>
            <h3>Counter: <small> { state } </small></h3>
            <hr/>

            <p> { memoProcesoPesado() } </p> 
            {/* UseMemo se usa en estos casos. */}
            <button
                className="btn btn-primary"
                onClick={ inc }
            >
                +1
            </button>

            <button
                className="btn btn-outline-dark m-lg-3"
                onClick={ () => {
                    setShow( !show )
                }}
            >
                Show/Hide { JSON.stringify( show )}
            </button>


        </div>
    )
}
