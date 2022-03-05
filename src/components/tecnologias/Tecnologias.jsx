import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import { lenguajesFrontend } from '../../data/lenguajesFrontend'
import { lenguajesBackend } from '../../data/lenguajesBackend'
import { lenguajesSQL } from '../../data/lenguajesSQL'
import { herramientas } from '../../data/herramientas';
import Tecnologia from './Tecnologia'
import './tecnologias.css'
const Tecnologias = () => {
  
  return (
    <>
    <div className="main__tecnologias">
      
          <h3 className='title-lenguajes'>FRONTEND</h3>
          <div className="content-lenguajes">
            {lenguajesFrontend.map((lenguaje,index) => (
              <Tecnologia key={index} lenguaje={lenguaje} classN={'bounceInLeft'}/>
            ))}
          </div>
        
           <h3 className='title-lenguajes'>BACKEND</h3>
            <div className="content-lenguajes">
              {lenguajesBackend.map((lenguaje,index) => (
                <Tecnologia key={index} lenguaje={lenguaje} classN={'bounceInRight'}/>
              ))}
          </div> 

           <h3 className='title-lenguajes'>DATABASE</h3>
            <div className="content-lenguajes">
              {lenguajesSQL.map((lenguaje,index) => (
                <Tecnologia key={index} lenguaje={lenguaje} classN={'bounceInLeft'}/>
                ))}
                {/* BounceLeft animacion para que entre por la izquierda */}
          </div>


           <h3 className='title-lenguajes'>HERRAMIENTAS</h3>
            <div className="content-lenguajes">
              {herramientas.map((herramienta,index) => (
                <Tecnologia key={index} lenguaje={herramienta} classN={'bounceInLeft'}/>
                ))}
                {/* BounceLeft animacion para que entre por la izquierda */}
          </div> 
     
    </div>
    </>
  )
}

export default Tecnologias