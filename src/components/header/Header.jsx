import { React, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { NavLink } from "react-router-dom";
import './header.css'



const Header = () => {
  /* isMenuOpen controla el menu en tamaño responsive */
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleClickMenu = () => {
    console.log("clikc menu")
    setIsMenuOpen(!isMenuOpen)
  }
  console.log('Gekllo')
  return (
    <>
      <span className='icon-menu' onClick={handleClickMenu}>
        {isMenuOpen ? <CloseIcon fontSize='large' /> : <MenuOpenIcon fontSize='large' />}
      </span>
      <header className={isMenuOpen ? 'openMenu' : 'closeMenu'}>
        <nav className='flex flex-col items-center'>
          <NavLink className="mx-auto" to="/" >

            <div className="logo animate__animated animate__bounc p-2" aria-label={'JAFT - LOGO'} onClick={() => setIsMenuOpen(false)}>JAFT</div>
          </NavLink>
          <div className="content__links">

            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => isActive ? 'nav-link' : ''}
            > INICIO</NavLink>

            <NavLink to="experiencia" onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => isActive ? 'nav-link' : ''}
            >EXPERIENCIA</NavLink>
            <NavLink to="educacion" onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => isActive ? 'nav-link' : ''}
            >EDUCACION</NavLink>
            <NavLink to="certificates" onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => isActive ? 'nav-link' : ''}
            >CERTIFICADOS</NavLink>
            <NavLink to="projectss" onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => isActive ? 'nav-link' : ''}
            >PROYECTOS</NavLink>
            <NavLink to="contacto" onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => isActive ? 'nav-link' : ''}
            >CONTACTO</NavLink>
          </div>
        </nav>
      </header>
    </>

  )
}

export default Header