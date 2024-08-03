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
import imgPepsico from '../../assets/images/experience/logo_pepsico.jpg';
import DescriptionTimeLine from '../../components/timeline/description/DescriptionTimeLine';
import { workExperienceData } from '../../data/workExperience';

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
      {
        workExperienceData.map(ele => {
          return <VerticalTimeLine
          icon={ele.icon}
          jobTitle={ele.jobTitle}
          date={ele.date}
          company={ele.company}
          description={ele.description} 
          side={ele.side}
          />
        })
      }
      
    </div>
      </>
  )
}

export default Experiencia