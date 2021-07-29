import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const { x, y } = coords

    useEffect( () => {
        
        console.log('Componente Montado')

        const mouseMove = (e) => {
            setCoords( { x: e.y, y: e.y } )
        }

        window.addEventListener('mousemove', mouseMove )

        return () => {
            console.log('Componente Desmontado')
            window.removeEventListener('mousemove', mouseMove )
        }

    }, [] )

    return (
        <>
          <h3>Eres genial</h3>  
          <p>
              x: { x } y: { y }
          </p>
        </>
    )
}
