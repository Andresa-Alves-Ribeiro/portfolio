import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="column-contact">
            <h4 className="footer__title">Menu</h4>

            <ul className="footer__list">
              <li>
                <a href="#home" className="footer__item link">Home</a>
              </li>
              <li>
                <a href="#about" className="footer__item link">Sobre Mim</a>
              </li>
              <li>
                <a href="#skills" className="footer__item link">Skills</a>
              </li>
              <li>
                <a href="#projects" className="footer__item link">Portfólio</a>
              </li>
              <li>
                <a href="#contact" className="footer__item link">Contato</a>
              </li>
            </ul>
          </div>

          <div className="column-contact">
            <h4 className="footer__title">Redes Sociais</h4>

            <ul className="footer__list">
              <li>
                <a href="https://www.linkedin.com/in/andresa-alves-ribeiro/" target="_blank" rel="noopener noreferrer" className="footer__item link">Linkedin</a>
              </li>
              <li>
                <a href="https://github.com/Andresa-Alves-Ribeiro" target="_blank" rel="noopener noreferrer" className="footer__item link">Github</a>
              </li>
            </ul>
          </div>

          <div className="column-contact">
            <h4 className="footer__title">Contato</h4>
            
            <ul className="footer__list">
              <li className="footer__item">(19) 99751-6202</li>
              <li className="footer__item">andresa_15ga@hotmail.com</li>
              <li className="footer__item">Cosmópolis - SP</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>Copyright &copy; 2025 Andresa Alves Ribeiro</p>
      </div>
    </footer>
  );
};

export default Footer;
