import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img-1.jpg'
import IMG2 from '../../assets/img-2.jpg'
import IMG3 from '../../assets/img-3.jpg'
import IMG4 from '../../assets/img-4.jpg'
import IMG5 from '../../assets/img-5.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Nombre del Portafolio',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Nombre del Portafolio',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Nombre del Portafolio',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Nombre del Portafolio',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Nombre del Portafolio',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mis Trabajos Recientes</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default portfolio