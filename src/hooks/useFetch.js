import { useEffect, useRef, useState } from 'react'

export const useFetch = ( url ) => {

    const isMounted = useRef(true) // Sirve para almacenar cualquier valor sin que el componente se reenderice otra vez...
    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => { // Esto se ejecuta la primera vez que se inicializa el componente
        return () => {
            isMounted.current = false // Esto se ejecuta cuando el componente ha sido desmontado...
        }
    }, [] )

    useEffect(() => {
        
        setState({ data: null, loading: true, error: null })

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                if( isMounted.current ) {
                    
                    setState({
                        loading: false,
                        error: null,
                        data
                    })

                } else {
                    console.log('Se evito el error')
                }

            })

    }, [ url ] )
    
    return state

}
