import React, { memo, useCallback } from 'react';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/github-nav.svg';
import { ReactComponent as WhatsappIcon } from '../../assets/whatsapp.svg';
import { APP_CONFIG } from '../../constants/config';
import { scrollToElement } from '../../utils/helpers';

/**
 * Componente Footer - Rodapé da aplicação
 * @returns {JSX.Element} Rodapé com informações de contato e links
 */
const Footer = () => {
    const handleNavClick = useCallback((e) => {
        e.preventDefault();
        const targetId = e.target.closest('a').getAttribute('href')?.substring(1);
        if (targetId) {
            scrollToElement(targetId);
        }
    }, []);

    return (
        <footer className="text-primary-dark py-[8vh] border-t-2 border-dashed border-primary mt-[10vh] text-base flex flex-col items-center relative overflow-hidden w-full">
            {/* Decorações de gatos */}
            <div className="absolute top-5 left-10 text-3xl opacity-20 animate-float-cat">🐱</div>
            <div className="absolute top-10 right-20 text-2xl opacity-20 animate-wiggle">🐾</div>
            <div className="absolute bottom-20 left-20 text-2xl opacity-20 animate-bounce-cute">💕</div>
            <div className="absolute bottom-10 right-10 text-3xl opacity-20 animate-sparkle">✨</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full max-w-full p-6 md:p-8 lg:p-12 relative z-10">
                <div className="diary-section relative">
                    <div className="absolute -top-3 -right-3 text-2xl animate-sparkle">✨</div>
                    <h3 className="diary-title text-2xl md:text-3xl font-handwriting mb-6 flex items-center gap-2">
                        <span className="text-2xl animate-wiggle">💌</span>
                        Contato
                    </h3>
                    <div className="relative z-10">
                        <p className="diary-text leading-relaxed mb-0 relative z-10 flex items-center gap-4 mb-4">
                            <strong className="font-handwriting font-bold min-w-[120px] text-right flex items-center gap-2">
                                <span>📧</span> Email:
                            </strong> 
                            <a 
                                href={`mailto:${APP_CONFIG.email}`}
                                className="diary-text hover:text-primary-dark transition-colors font-handwriting"
                                aria-label={`Enviar email para ${APP_CONFIG.email}`}
                            >
                                {APP_CONFIG.email}
                            </a>
                        </p>
                        <p className="diary-text leading-relaxed mb-0 relative z-10 flex items-center gap-4">
                            <strong className="font-handwriting font-bold min-w-[120px] text-right flex items-center gap-2">
                                <span>📍</span> Localização:
                            </strong> 
                            <span className="font-handwriting">Cosmópolis, SP</span>
                        </p>
                    </div>
                </div>

                <div className="diary-section relative">
                    <div className="absolute -top-3 -left-3 text-2xl animate-wiggle">🐾</div>
                    <h3 className="diary-title text-2xl md:text-3xl font-handwriting mb-6 flex items-center gap-2">
                        <span className="text-2xl animate-bounce-cute">🔗</span>
                        Links
                    </h3>
                    <ul className="list-none p-0 m-0 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li>
                            <a href="#about" onClick={handleNavClick} className="diary-text text-base font-handwriting transition-all duration-300 relative py-3 px-4 flex items-center gap-2 bg-white border-2 border-primary-light rounded-lg hover:text-primary-dark hover:border-primary hover:scale-105 hover:shadow-lg">
                                <span>💕</span> Sobre
                            </a>
                        </li>
                        <li>
                            <a href="#skills" onClick={handleNavClick} className="diary-text text-base font-handwriting transition-all duration-300 relative py-3 px-4 flex items-center gap-2 bg-white border-2 border-primary-light rounded-lg hover:text-primary-dark hover:border-primary hover:scale-105 hover:shadow-lg">
                                <span>✨</span> Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" onClick={handleNavClick} className="diary-text text-base font-handwriting transition-all duration-300 relative py-3 px-4 flex items-center gap-2 bg-white border-2 border-primary-light rounded-lg hover:text-primary-dark hover:border-primary hover:scale-105 hover:shadow-lg">
                                <span>🐱</span> Projetos
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={handleNavClick} className="diary-text text-base font-handwriting transition-all duration-300 relative py-3 px-4 flex items-center gap-2 bg-white border-2 border-primary-light rounded-lg hover:text-primary-dark hover:border-primary hover:scale-105 hover:shadow-lg">
                                <span>💌</span> Contato
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="diary-section relative">
                    <div className="absolute -top-3 -right-3 text-2xl animate-heart-beat">💖</div>
                    <h3 className="diary-title text-2xl md:text-3xl font-handwriting mb-6 flex items-center gap-2">
                        <span className="text-2xl animate-float-cat">🐱</span>
                        Redes Sociais
                    </h3>
                    <div className="flex gap-6 mt-4 relative z-10 justify-center md:justify-start">
                        <a 
                            href={APP_CONFIG.socialLinks.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="LinkedIn"
                            className="transition-all duration-300 relative p-3 flex items-center justify-center rounded-full bg-white border-2 border-primary-light hover:border-primary hover:scale-110 hover:rotate-5 hover:shadow-lg"
                        >
                            <LinkedinIcon className="w-6 h-6 transition-all duration-300 hover:scale-110" />
                        </a>
                        <a 
                            href={APP_CONFIG.socialLinks.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="GitHub"
                            className="transition-all duration-300 relative p-3 flex items-center justify-center rounded-full bg-white border-2 border-primary-light hover:border-primary hover:scale-110 hover:rotate-5 hover:shadow-lg"
                        >
                            <GithubIcon className="w-6 h-6 transition-all duration-300 hover:scale-110" />
                        </a>
                        <a 
                            href={`https://api.whatsapp.com/send?phone=${APP_CONFIG.socialLinks.whatsapp}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="WhatsApp"
                            className="transition-all duration-300 relative p-3 flex items-center justify-center rounded-full bg-white border-2 border-primary-light hover:border-primary hover:scale-110 hover:rotate-5 hover:shadow-lg"
                        >
                            <WhatsappIcon className="w-6 h-6 transition-all duration-300 hover:scale-110" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center w-full py-8 border-t-2 border-dashed border-primary text-primary-dark text-sm relative z-10">
                <p className="diary-text font-handwriting flex items-center justify-center gap-2">
                    <span className="animate-wiggle">🐾</span>
                    &copy; {new Date().getFullYear()} Andresa Alves. Todos os direitos reservados.
                    <span className="animate-wiggle">🐾</span>
                </p>
            </div>
        </footer>
    );
};

export default memo(Footer);
