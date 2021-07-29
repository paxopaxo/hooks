import { useState } from "react"

export const useCounter = ( initialState = 10 ) => {

    const [state, setState] = useState(initialState)

    const inc = ( factor = 1 ) => {
        setState( state + factor )
    }

    const reset = () => {
        setState(initialState)
    }

    const dec = ( factor = 1 ) => {
        setState( state - factor )
    }

    return {
        state,
        inc,
        dec,
        reset
    }

}
