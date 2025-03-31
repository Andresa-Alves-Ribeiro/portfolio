import React, { useState, useEffect } from 'react'
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/github-nav.svg';
import { ReactComponent as WhatsappIcon } from '../../assets/whatsapp.svg';
import { useTheme } from '../../hooks/useTheme';
import { scrollToElement } from '../../utils/helpers';
import './header.scss'

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    scrollToElement(targetId);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`nav container ${scrolled ? 'scrolled' : ''}`}>
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
          <li className="nav__item">
            <button 
              onClick={toggleTheme} 
              className="nav__theme-toggle"
              aria-label={`Mudar para tema ${isDarkMode ? 'claro' : 'escuro'}`}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </li>
          <li className="nav__item nav__menu-toggle">
            <button 
              onClick={toggleMenu}
              className={`nav__menu-button ${isMenuOpen ? 'active' : ''}`}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </li>
        </div>

        <div className={`nav__links ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav__item">
            <a href="#about" className="nav__link" onClick={handleNavClick}>Sobre</a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link" onClick={handleNavClick}>Skills</a>
          </li>
          <li className="nav__item">
            <a href="#projects" className="nav__link" onClick={handleNavClick}>Projetos</a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link" onClick={handleNavClick}>Contato</a>
          </li>
        </div>
      </ul>
    </header>
  )
}

export default Header;