import React from 'react'
import Bienvenida from '../../components/bienvenida/Bienvenida'
import Tecnologias from '../../components/tecnologias/Tecnologias'

const Home = () => {
  return (
    <div className='flex flex-wrap justify-around' style={{width: '100%'}}>
        <Bienvenida />
        
        <Tecnologias />
    </div>
  )
}

export default Home