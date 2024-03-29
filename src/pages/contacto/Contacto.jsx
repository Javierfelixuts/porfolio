import React, { useRef, useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import emailjs from '@emailjs/browser';

import './contacto.css'


import{ init } from '@emailjs/browser';
init("Ymft5V6HSTdjiJfRq");

const Contacto = () => {
  const [errorName, setErrorName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [correoEnviado, setCorreoEnviado] = useState(false)

//<h3>
//<a href="https://api.whatsapp.com/send/?phone=+{number}&text&app_absent=0" target="_blank" rel="noopener noreferrer">
//Vía whatsapp  <WhatsAppIcon /></a>
//</h3>
  const form = useRef();
  const user_name = useRef();
  const user_email = useRef();
  const message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    activateAnimation()
    console.log('input', form.current)
    user_name.current.value === ''? setErrorName('*Debes de incluir un nombre') : setErrorName('')
    user_email.current.value === '' ? setErrorEmail('*Debes de incluir un correo') : setErrorEmail('')
    message.current.value === '' ? setErrorMessage('*Agrega un mensaje') : setErrorMessage('')
    
    if(message.current.value && user_email.current.value && user_name.current.value){
      emailjs.sendForm('service_1tgjj38', 'template_hlcmwwl', form.current, 'Ymft5V6HSTdjiJfRq')
      .then((result) => {
        console.log(result.text);
        form.current.reset()
        setCorreoEnviado(true)
      }, (error) => {
        console.log(error.text);
      });
    }

    setTimeout(() => {
      setCorreoEnviado(false)
    }, 4000)

    function activateAnimation(){

      form.current.style.transition = 'ease 1s';
      form.current.style.transform = 'translateY(500px)';
    }
  };

  return (
    <>
     
     {/* {
       correoEnviado && <div className="correo_exitoso">
       Mensaje enviado correctamente</div>
     } */}

     
    
    <div className="content-triangle">
      <div className="content-form">
        <center>
          <h2 className='text-3xl font-bold'>CONTACTAME</h2>
        </center>
        <form className='contacto' ref={form} onSubmit={sendEmail}>
        <div className="content__input mb-10">
          <label>Nombre</label>
          <input ref={user_name} type="text" name="user_name" />
          {errorName.length > 0 ? <span className='form__error'>{errorName}</span> : '' }
          
        </div>
        <div className="content__input">
          <label>Correo</label>
          <input ref={user_email} type="email" name="user_email" />
          {errorEmail.length > 0 ? <span className='form__error'>{errorEmail}</span> : '' }
        </div>
        <div className="content__input">
          <label>Asunto</label>
          <textarea ref={message} name="message" />
          {errorMessage.length > 0 ? <span className='form__error'>{errorMessage}</span> : '' }
        </div>
        
          <div className={correoEnviado ? "correo_exitoso_open" : "correo_exitoso_close"}>
          {/* Icono */}
          <CheckCircleOutlineIcon className='check__icon' />
         <p> -------- GRACIAS --------</p>
          <p>SU MENSAJE HA SIDO ENVIADO CON EXITO</p>
         </div>
        
        
        <input type="submit" value="ENVIAR" />
      </form>
      </div>
    
    <div className="barra"></div>
      <div className="triangle-left"></div>
      <div className="triangle-right"></div>
    
    </div>
    </>
  )
}

/* Libreria */
/* https://www.npmjs.com/package/emailjs-com

https://www.emailjs.com/docs/examples/reactjs/ */
export default Contacto