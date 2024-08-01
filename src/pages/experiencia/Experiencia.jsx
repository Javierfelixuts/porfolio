import React, { useEffect } from 'react'
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ShareIcon from '@mui/icons-material/Share';
import HiveIcon from '@mui/icons-material/Hive';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import { VerticalTimeLine } from '../../components/timeline/VerticalTimeLine'
import './experiencia.css'
import ScrollDown from '../../components/scrollDown/ScrollDown';
import imgOjai from '../../assets/images/experience/logo_ojai.png';
import imgCabsa from '../../assets/images/experience/logo_cabsa.png';
import imgFinreg from '../../assets/images/experience/logo_finreg.png';
import imgSomosMultimedia from '../../assets/images/experience/logo_somos_multimedia.jpg';
import imgRubisco from '../../assets/images/experience/logo_rubisco.jpg';
import imgAutomatic from '../../assets/images/experience/logo_automatic.png';
import imgPepsico from '../../assets/images/experience/logo_pesico.jpg';


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
    {/* <center>
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
      </center> */}
      <div className="clickScrol" onClick={moveDownScroll}>
          <ScrollDown />
        </div>
    <div className='w-full overflow mb-6'>
      
      <center>
        <h2>EXPERIENCIA EN EMPRESAS</h2>
        
      </center>
      <VerticalTimeLine
          icon={imgPepsico}
          date={"2023 - 2024"}
          company={"PEPSICO"}
          description={"Mi company actualmente"} 
          />
      <VerticalTimeLine
          icon={imgAutomatic}
          date={"2022 - 2023"}
          company={"AD DESARROLLO"}
          order1={2}
          order2={1}
          description={"Mi company actualmente"} 
          />
      <VerticalTimeLine
          icon={imgCabsa}
          date={"2022 - 2023"}
          company={"GRUPO CABSA"}
          description={"Mi company actualmente"} 
          />
      <VerticalTimeLine
          icon={imgOjai}
          date={"2019 - 2022"}
          company={"OJAI ALIMENTOS"}
          order1={2}
          order2={1}
          description={"Mi company actualmente"} 
          />
     
      <VerticalTimeLine
          icon={imgRubisco}
          date={"2020 - 2022"}
          company={"RUBISCO"}
          description={"company freelance"}  
          fade="fade-left" 
        />
        <VerticalTimeLine
          icon={imgSomosMultimedia}
          date={"2019"}
          company={"SOMOS MULTIMEDIA"}
          order1={2}
          order2={1}
          description={"Mis estadías profesionales"}  
          fade="fade-right" 
          />
        <VerticalTimeLine
          icon={imgFinreg}
          date={"2018"}
          company={"FINREG"}
          description={"Financiera Regional"}  
          fade="fade-left" 
          />
      
    </div>
      </>
  )
}

export default Experiencia