import React from 'react'
import './about.css'
import Me from '../../assets/img-1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Acerca de mi</h5>
      <h2>Sobre Mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="Imagen Mia" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experiencia</h5>
              <small>+2 años</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clientes</h5>
              <small>+100 en el mundo</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Proyectos</h5>
              <small>+50 realizados</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dolor doloremque sequi totam architecto dicta officia aperiam rerum fuga eligendi facere animi consectetur voluptas autem commodi, sed veritatis porro explicabo.</p>

          <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default about


// minuto 24