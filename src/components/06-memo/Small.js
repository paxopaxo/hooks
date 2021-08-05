import React from 'react'

export const Small = React.memo( ({ value }) => {

    console.log('Me volvi a llamar :( ')

    return (

        <small> { value }</small>
    )
})
// React.memo memoriza el componente ya renderizado anteriormente y lo envía al componente padre en el caso que no hayan ocurrido cambios
// dentro de los estados del componente memorizado...

