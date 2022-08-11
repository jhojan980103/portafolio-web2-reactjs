import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/perfil-2.jpg'
import HeaderSocials from './headerSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola. Me llamo</h5>
        <h1>jhojan Estiven</h1>
        <h5 className="text-light">Desarrollador Web</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Yo" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Abajo</a>
      </div>
    </header>
  )
}

export default header