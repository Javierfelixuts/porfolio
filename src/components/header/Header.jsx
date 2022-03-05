import {React, useCallback, useEffect, useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {NavLink } from "react-router-dom";
import './header.css'



const Header = () => {
  /* isMenuOpen controla el menu en tamaño responsive */
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleClickMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
 console.log(window.onscroll)
  return (
    <>
    <span className='icon-menu' onClick={handleClickMenu}>
              {isMenuOpen ? <CloseIcon fontSize='large'/> : <MenuOpenIcon fontSize='large'/>}
    </span>
        <div className="relleno"></div>
        <header className={isMenuOpen ? 'openMenu' : 'closeMenu'}>
          <nav>
                  <NavLink to="/" >
                  
                      <div className="logo animate__animated animate__bounc"  onClick={handleClickMenu}>JAFT</div>
                  </NavLink>
                  <div className="content__links">

                   <NavLink 
                    to="/" 
                    onClick={handleClickMenu}
                    className={({isActive}) => isActive ? 'nav-link' :''}
                    > INICIO</NavLink>
                  
                    <NavLink to="experiencia" onClick={handleClickMenu}
                    className={({isActive}) => isActive ? 'nav-link' :''}
                    >EXPERIENCIA</NavLink>
                    <NavLink to="educacion" onClick={handleClickMenu}
                    className={({isActive}) => isActive ? 'nav-link' :''}
                    >EDUCACION</NavLink>
                  <NavLink to="contacto" onClick={handleClickMenu}
                    className={({isActive}) => isActive ? 'nav-link' :''}
                    >CONTACTO</NavLink>
                  </div>
          </nav>
        </header>
    </>
    
  )
}

export default Header