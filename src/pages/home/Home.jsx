import React from 'react'
import Bienvenida from '../../components/bienvenida/Bienvenida'
import Tecnologias from '../../components/tecnologias/Tecnologias'

const Home = () => {
  return (
    <div className='flex flex-wrap justify-center'>
        <Bienvenida />
        
        <Tecnologias />
    </div>
  )
}

export default Home