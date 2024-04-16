import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import './footer.css'
const Footer = () => {
  const spaceBetweenSocialIcons = 10
  return (
        <footer className='footer'>
          <div className="footer__content-item">
            <div className="footer__item">
              <a className='footer__socials' href="https://www.facebook.com/javieritson" target="_blank" rel="noopener noreferrer">
                <FacebookIcon style={{marginRight:spaceBetweenSocialIcons}} />
                Javier Felix
              </a>
            </div>
            <div className="footer__item">
              <a className='footer__socials' href="https://mail.google.com/mail/u/2/?ogbl#inbox" target="_blank" rel="noopener noreferrer">
                <MarkEmailReadIcon style={{marginRight:spaceBetweenSocialIcons}} />
                felixtorresjavierantonio@gmail.com
              </a>
            </div>
            <div className="footer__item">
              <a className='footer__socials' href="https://www.youtube.com/channel/UCSdK76iChD7P1ZqrmkW4Odw" target="_blank" rel="noopener noreferrer">
                <YouTubeIcon style={{marginRight:spaceBetweenSocialIcons}} />
                Express Tutorial
              </a>
            </div>
          </div>
          <center>
            <p className='footer__copyright'>&#169; Copyright 2024. Todos los derechos reservados</p>
          </center>
        </footer>
  )
}

export default Footer