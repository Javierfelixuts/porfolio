import React from 'react'
import './mensaje.css'
const Mensaje = ({mensaje}) => {
  return (
    <div className="content__mensaje">
        <div className="mensaje">
            <p>
              {mensaje}
            </p>
        </div>
    </div>
  )
}

export default Mensaje