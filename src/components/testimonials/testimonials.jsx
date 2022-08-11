import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/img-1.jpg'
import avatar2 from '../../assets/img-2.jpg'
import avatar3 from '../../assets/img-3.jpg'
import avatar4 from '../../assets/img-4.jpg'


import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: avatar1,
    name: 'Jhojan Estiven',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolorum obcaecati sed eveniet illo rerum fuga quia consequatur laboriosam accusamus exercitationem eius iure in nam nemo, nulla nostrum quis tempora.'
  },
  {
    avatar: avatar2,
    name: 'Marlon Francisco',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolorum obcaecati sed eveniet illo rerum fuga quia consequatur laboriosam accusamus exercitationem eius iure in nam nemo, nulla nostrum quis tempora.'
  },
  {
    avatar: avatar3,
    name: 'Amely Montaña',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolorum obcaecati sed eveniet illo rerum fuga quia consequatur laboriosam accusamus exercitationem eius iure in nam nemo, nulla nostrum quis tempora.'
  },
  {
    avatar: avatar4,
    name: 'Maria Constanza',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolorum obcaecati sed eveniet illo rerum fuga quia consequatur laboriosam accusamus exercitationem eius iure in nam nemo, nulla nostrum quis tempora.'
  },
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Clientes</h5>
      <h2>Testimonios</h2>

      <Swiper className="container testimonials__container" 
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials