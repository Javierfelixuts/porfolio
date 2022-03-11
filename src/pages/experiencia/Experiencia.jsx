import React, { useEffect } from 'react'
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ShareIcon from '@mui/icons-material/Share';
import HiveIcon from '@mui/icons-material/Hive';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import { VerticalTimeLine } from '../../components/timeline/VerticalTimeLine'
import './experiencia.css'
import ScrollDown from '../../components/scrollDown/ScrollDown';

const Experiencia = () => {
  useEffect(()=>{
    window.scrollTo( 0, 0 );
  })
  const moveDownScroll = () => {
    window.scrollTo( {
      top: 400,
      behavior: 'smooth',
    } );
  }
  return (
    <>
    <center>
        <div className="content__experiencia">
          <div className="explicacion__experiencia">
            <h2>META</h2>
            <p>Aportar al máximo mis conocimientos y a la vez aprender lo mas que se pueda para seguir creciendo en temas de tecnología.</p>
            <br/>
            <br/>
            <p>Las siguientes empresas han sido parte de mi formación para ser <em>Programador Web</em> y  adquirir los conocimientos que hoy poseo, cada una en forma distina
              ya sea para cumplir con mis estadías profesionales o para el campo laboral. </p>
          </div>
        </div>
      </center>
      <div className="clickScrol" onClick={moveDownScroll}>
          <ScrollDown />
        </div>
    <div className='overflow mb-6'>
      
      <center>
        <h2>EXPERIENCIA EN EMPRESAS</h2>
      </center>
      <VerticalTimeLine
          icon={<WarehouseIcon />}
          fecha={"2019 - ACTUAL"}
          empresa={"OJAI ALIMENTOS"}
          order1={2}
          order2={1}
          texto={"Mi empresa actualmente"} 
          />
      <VerticalTimeLine
          icon={<HiveIcon />}
          fecha={"2020 - ACTUAL"}
          empresa={"RUBISCO"}
          texto={"Empresa freelance"}  
          fade="fade-left" 
        />
        <VerticalTimeLine
          icon={<ShareIcon />}
          fecha={"2019"}
          empresa={"SOMOS MULTIMEDIA"}
          order1={2}
          order2={1}
          texto={"Mis estadías profesionales"}  
          fade="fade-right" 
          />
        <VerticalTimeLine
          icon={<CardTravelIcon />}
          fecha={"2018"}
          empresa={"FINREG"}
          texto={"Financiera Regional"}  
          fade="fade-left" 
          />
      
    </div>
      </>
  )
}

export default Experiencia