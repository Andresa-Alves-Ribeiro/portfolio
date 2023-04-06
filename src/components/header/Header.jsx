import React from 'react'
import './header.css'
import CTA from '../cta/CTA'

const Header = () => {
  return (
    <header>
      <div className='title_loop'>
        <h5 className='title-primary'>Hello!! I'm</h5>
        <div className='title'><span>Andresa</span> Alves Ribeiro</div>
        <h5 className='subtitle'>Front-End / Fullstack Developer</h5>
      </div>
    </header>
  )
}

export default Header
