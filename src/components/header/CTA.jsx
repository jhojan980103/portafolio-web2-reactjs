import React from 'react'
import HV from '../../assets/HV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={HV} download className='btn'>Descargar HV</a>
        <a href="#contact" className='btn btn-primary'>Contactarme</a>
    </div>
  )
}

export default CTA