import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Jhojan98</a>

      <ul className="permalinks">
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre Mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jhojan98. Todos los derechos reservados</small>
      </div>
    </footer>
  )
}

export default footer