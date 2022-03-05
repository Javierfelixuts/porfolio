import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import './bienvenida.css'
import {Animated} from "react-animated-css";
import profile from '../../assets/images/profile.webp'
const Bienvenida = () => {
  return (
    <>
    
          
        
    <main className="content-profile">

        <div className="profile">
            {/* Animacion hecha con la libreria "react-scroll-motion"  */}
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <img className="scaleImage" src={profile} alt="perfil" srcSet={profile} />
        </Animated>
        <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
            <div className="profile-facts">
                <div className="title-profile">

                    <h3>Hola, Soy</h3>
                    <h2>Javier Félix </h2>
                </div>

                <div className="profile-body">
                    <h2>Programador Frontend </h2>
                    Mi nombre es Javier Antonio Félix Torres, tengo 26 años soy de Cd. Obregón Sonora, México. Soy un apasionado por la programación y con mucho entusiasmo 
                    por seguir creciendo en temas de tecnologías.
                </div>
            </div>
            </Animated>
            
        </div>
    </main>
    </>
  )
}

export default Bienvenida