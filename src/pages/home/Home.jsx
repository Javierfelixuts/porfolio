import React from 'react'
import Bienvenida from '../../components/bienvenida/Bienvenida'
import Tecnologias from '../../components/tecnologias/Tecnologias'

const Home = () => {
  return (
    <div className='mt-10 flex flex-col flex-wrap justify-center' style={{width: '100%'}}>
        <Bienvenida />
        
        <Tecnologias />
    </div>
  )
}

export default Home