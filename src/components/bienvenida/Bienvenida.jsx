import React from 'react'
import './bienvenida.css'
import {Animated} from "react-animated-css";
import profile from '../../assets/images/profile.webp'
const Bienvenida = () => {

    // User's date of birth (in this example, setting a sample date)
const birthDate = new Date('1995-11-11'); // You can change this date to yours

// Get the current date
const currentDate = new Date();

// Calculate the difference in years
let age = currentDate.getFullYear() - birthDate.getFullYear();

// Check if this year's birthday has passed
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();
const birthMonth = birthDate.getMonth();
const birthDay = birthDate.getDate();

if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
  age--; // Subtract one year if this year's birthday hasn't occurred yet
}


  return (
    <>
    
          
        
    <main className="content-profile">

        <div className="profile">
            {/* Animacion hecha con la libreria "react-animated-css"  */}
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
                    <h2>Desarrollador Frontend </h2>
                    Mi nombre es Javier Antonio Félix Torres, tengo { age } años soy de Cd. Obregón Sonora, México. 
                    Tengo mas de 6 años de experienca en el Desarrollo Web.
                    Soy un apasionado por la programación y con mucho entusiasmo 
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