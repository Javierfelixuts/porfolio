import React from 'react'
import './bienvenida.css'
import { Animated } from "react-animated-css";
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
            <main>
                <div className="profile flex flex-col justify-between">
                    {/* Animacion hecha con la libreria "react-animated-css"  */}
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                        <img className="scaleImage" src={profile} alt="perfil" srcSet={profile} />
                    </Animated>
                    <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                        <div className="profile-facts">
                            <div className="title-profile">

                                <h2 className='m-1'>Javier Félix Torres</h2>
                                <span className='mx-2 w-[2px] h-8 bg-black'></span>
                                <h3 className='m-1'>Frontend Developer</h3>
                            </div>

                            <div className="profile-body">
                                Desarrollador web apasionado por la programación y la resolución de problemas, con más de 6 años de experiencia. Comprometido con el aprendizaje continuo, responsable y respetuoso, con la visión de alcanzar tanto los objetivos personales como los de la empresa..
                            </div>
                        </div>
                    </Animated>
                </div>
            </main>
        </>
    )
}

export default Bienvenida