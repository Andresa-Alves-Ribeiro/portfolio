import React from 'react'
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/github-nav.svg';
import { ReactComponent as WhatsappIcon } from '../../assets/whatsapp.svg';
import './nav.scss'

const Nav = () => {

  return (
    <nav className="nav">
      <ul className="nav__list">
        <div className="nav__icons">
          <li className="nav__item">
            <a href="https://www.linkedin.com/in/andresa-alves-ribeiro/" target="_blank" rel="noopener noreferrer" className="nav__link">
              <LinkedinIcon className="nav__icon" />
            </a>
          </li>
          <li className="nav__item">
            <a href="https://github.com/Andresa-Alves-Ribeiro" target="_blank" rel="noopener noreferrer" className="nav__link">
              <GithubIcon className="nav__icon" />
            </a>
          </li>
          <li className="nav__item">
            <a href="https://api.whatsapp.com/send?phone=5519997516202" target="_blank" rel="noopener noreferrer" className="nav__link">
              <WhatsappIcon className="nav__icon" />
            </a>
          </li>
        </div>

        <div className="nav__links">
          <li className="nav__item">
            <a href="#about" className="nav__link">Sobre</a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link">Skills</a>
          </li>
          <li className="nav__item">
            <a href="#projects" className="nav__link">Projetos</a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">Contato</a>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Nav
