import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#about" className="nav__link">About Me</a>
        </li>
        <li className="nav__item">
          <a href="#skills" className="nav__link">Skills</a>
        </li>
        <li className="nav__item">
          <a href="#projects" className="nav__link">Projects</a>
        </li>
        <li className="nav__item">
          <a href="#contact" className="nav__link">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
