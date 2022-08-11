import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>Que habilidades tengo</h5>
      <h2>Mi Experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desarrollo Frontend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Basico</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Basico</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Basico</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Desarrollo Backend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Basico</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basico</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default experience