import React from 'react'
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './verticalTimeLine.css'

export const VerticalTimeLine = ({icon, fecha, empresa, order1, order2, texto, fade}) => {
  AOS.init();
  return (
    <div className='verticalTimeLine'>
      <div className="vertical__left  m-1" style={{order: order1}}>
        {/* Icon */}
        {/* Animaciones hecahs con la libreria de aos */}
        <div 
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        className="vertical__icon-left">
          {icon}
        </div>
      </div>
      <div
         data-aos="fade-up"
         data-aos-anchor-placement="center-center"
      className="vertical__middle-bar m-1" style={{order: order2}}>
        {/* Bar */}
      
        <div className="bar"></div>
          <WifiTetheringIcon />
        <div className="bar"></div>
        {/* Bar */}
      </div>
      <div 
      data-aos={fade}
      data-aos-anchor-placement="center-center"
      className="vertical__right  m-1">
        {/* Fecha y empresa */}
        <div 
        
        className="content__vertical-context">
          <div className="vertical__fecha">
            <h3>{fecha}</h3>
          </div>
          <div className="middle__bar"></div>
          <div className="vertical__titulo">
            <h3>{empresa}</h3>
            {/* <h1>OJAI ALIMENTOS SA DE CV</h1> */}
          </div>
        </div>
        <div className="vertical__resume">
          <span>
            <h6>{texto}</h6>
          </span>
        </div>
  
      </div>

      
    </div>
  )
}
