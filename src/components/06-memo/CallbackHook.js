import React from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

    const [ counter, setCounter ] = useState( 10 )
     
    const increment = () => {
        setCounter( counter + 1 )
    }


    return (
        <div>
            <h1>UseCallbackHook</h1>
            <hr/>

            <ShowIncrement increment={ increment } />

        </div>
    )
}
