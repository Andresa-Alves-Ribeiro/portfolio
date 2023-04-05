import React from 'react'
import CV from '../../assets/cv.pdf'
import './cta.css'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download>Download my CV here</a>
    </div>
  )
}

export default CTA