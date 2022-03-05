import React from 'react'
import Bienvenida from '../../components/bienvenida/Bienvenida'
import Mensaje from '../../components/mensaje/Mensaje'
import Tecnologias from '../../components/tecnologias/Tecnologias'

const Home = () => {
  return (
    <>
        <Bienvenida />
        <Mensaje
          mensaje={" Estos son los lenguajes que he aprendido a lo largo de mi carrera para ser Programador Web ademas algunas herramientas que me ha tocado utilizar."}
        />
        <Tecnologias />
    </>
  )
}

export default Home