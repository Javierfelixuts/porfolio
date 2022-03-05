import React from 'react'
import WarehouseIcon from '@mui/icons-material/Warehouse';
import LanguageIcon from '@mui/icons-material/Language';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import 'aos/dist/aos.css';

import { VerticalTimeLine } from '../../components/timeline/VerticalTimeLine';
import Mensaje from '../../components/mensaje/Mensaje';
 

const Educacion = () => {
  return (
    <>
      <center>
        <div className="content__experiencia">
          <div className="explicacion__experiencia">
            <h2>OBJETIVO</h2>
            <p>Estar siempre actualizado en temas de tecnología, investigar diferentes temas relacionados a mi carrera de manera autodidacta.</p>
            <br />
            <br />
            <p>A continuación muestro escuelas y cursos que he realizado desde que me incursioné en el mundo de la programación en diferentes plataformas y escuelas para ser <em>Programador Web </em> 
               algunas de manera autodidacta. </p>
          </div>
        </div>
      </center>
      <div className="overflow">

        <center>
            <center>
            <h2>MI EDUCACIÓN</h2>
          </center>
        {/* VerticalTimeLine tiene dos propiedades extras
        
        cuanto quieres posicionar los elementos del lado derecho, se necesitan las dos propiedades
        order1 y order2 con valor invertido*/}
            <VerticalTimeLine
            icon={<HistoryEduIcon />}
            fecha={"2015 - 2019"}
            empresa={"UTS"}
            order1={2}
            order2={1}
            texto={"Ingeniería de TICs"}  
          />
          <VerticalTimeLine
            icon={<WarehouseIcon />}
            fecha={"2018 - 2019"}
            empresa={"ICATSON"}
            texto={"Certificado de Inglés"} 
            fade="fade-left" 
            />
            <VerticalTimeLine
            icon={<HistoryEduIcon />}
            fecha={"2011 - 2014"}
            empresa={"CBTIS - 188"}
            order1={2}
            order2={1}
            texto={"Técnico en Electricidad"}  
            fade="fade-right" 
          />
          <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          className="animate">
            <h2>CURSOS</h2>
            <br/>
              <br/>
          </div>
            
          <VerticalTimeLine
            icon={<LanguageIcon />}
            fecha={"2021 - ACTUAL"}
            empresa={"UDEMY"}
            order1={2}
            order2={1}
            texto={"React: De cero a experto ( Hooks y MERN ) "} 
            fade="fade-right"
            />
            <VerticalTimeLine
            icon={<LanguageIcon />}
            fecha={"2019 - 2020"}
            empresa={"UDEMY"}
            texto={"Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL"}  
            fade="fade-left" 
          />
            <br/>
            <br/>
          </center>
      </div>

        <Mensaje mensaje={"Los cursos y escuelas antes mencionados son de los mas importantes, pero tambén he seguido muchos tutoriales en YouTube y otras páginas"}/>
    </>
  );
}

export default Educacion