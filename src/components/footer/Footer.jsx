import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import './footer.scss';

const Footer = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const scrollReveal = ScrollReveal();
    scrollReveal.reveal(aboutRef.current, {
      duration: 2000,
      delay: 500,
      easing: 'ease-in-out',
      distance: '20px',
      origin: 'bottom',
      opacity: 0,
    });
  }, []);

  return (
    <footer className="footer">
      <div className="container" ref={aboutRef}>
        <div className="row">
          <div className="column-contact">
            <h4 className="footer__title">Menu</h4>
            <ul className="footer__list">
              <li>
                <a href="#home" className="footer__item link">Home</a>
              </li>
              <li>
                <a href="#quem-sou" className="footer__item link">Sobre Mim</a>
              </li>
              <li>
                <a href="#skills" className="footer__item link">Minhas skills</a>
              </li>
              <li>
                <a href="#portfolio" className="footer__item link">Portfólio</a>
              </li>
              <li>
                <a href="#contato" className="footer__item link">Contato</a>
              </li>
            </ul>
          </div>

          <div className="column-contact">
            <h4 className="footer__title">Redes Sociais</h4>
            <ul className="footer__list">
              <li>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer__item link">Linkedin</a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer__item link">Instagram</a>
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
        <p>Copyright &copy; 2023 Andresa Alves Ribeiro</p>
      </div>
    </footer>
  );
};

export default Footer;
