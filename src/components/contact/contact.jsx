import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Ponerse en Contacto</h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>jhojan030198@gmail.com</h5>
            <a href="mailto:jhojan030198@gmail.com" target="_blank">Enviar mensaje</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Jhojan</h5>
            <a href="https://m.me/jhojanestiven.montanacruz" target="_blank">Enviar mensaje</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+57 322 388 2577</h5>
            <a href="https://api.whatsapp.com/send?phone=3223882577" target="_blank">Enviar mensaje</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='Nombre' placeholder='Nombre Completo' required />
          <input type="email" name='Email' placeholder='Tu Correo' required />
          <textarea name="Mensaje" rows="7" placeholder='Tu Mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default contact