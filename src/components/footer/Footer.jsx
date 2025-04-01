import React from 'react';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/github-nav.svg';
import { ReactComponent as WhatsappIcon } from '../../assets/whatsapp.svg';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="column-contact">
                    <h3 className="footer__title">Contato</h3>
                    <div className="footer__contact-info">
                        <p className="footer__text">
                            <strong>Email:</strong> andresa_15ga@hotmail.com
                        </p>
                        <p className="footer__text">
                            <strong>Localização:</strong> Cosmópolis, SP
                        </p>
                    </div>
                </div>

                <div className="column-contact">
                    <h3 className="footer__title">Links</h3>
                    <ul className="footer__list">
                        <li><a href="#about" className="footer__item">Sobre</a></li>
                        <li><a href="#skills" className="footer__item">Skills</a></li>
                        <li><a href="#projects" className="footer__item">Projetos</a></li>
                        <li><a href="#contact" className="footer__item">Contato</a></li>
                    </ul>
                </div>

                <div className="column-contact">
                    <h3 className="footer__title">Redes Sociais</h3>
                    <div className="footer__social">
                        <a href="https://www.linkedin.com/in/andresa-alves-ribeiro/" target="_blank" rel="noopener noreferrer" className="link">
                            <LinkedinIcon className="footer__icon" />
                        </a>
                        <a href="https://github.com/Andresa-Alves-Ribeiro" target="_blank" rel="noopener noreferrer" className="link">
                            <GithubIcon className="footer__icon" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5519997516202" target="_blank" rel="noopener noreferrer" className="link">
                            <WhatsappIcon className="footer__icon" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <p>&copy; {new Date().getFullYear()} Andresa Alves. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
