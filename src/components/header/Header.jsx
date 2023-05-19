import React from 'react';
import './header.scss'

const Header = () => {

  return (
    <header id='home'>
        <div className='title_loop'>
          <h5 className='title-primary'>Olá!! Eu sou</h5>
          <div className='title'><span>Andresa</span> Alves</div>
          <h5 className='subtitle'>Desenvolvedora Full-Stack</h5>
        </div>
    </header>
  )
}

export default Header
