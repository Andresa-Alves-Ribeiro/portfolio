import React, { memo } from 'react';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/github-nav.svg';
import { ReactComponent as WhatsappIcon } from '../../assets/whatsapp.svg';
import { APP_CONFIG } from '../../constants/config';

/**
 * Componente Footer - Rodapé da aplicação
 * @returns {JSX.Element} Rodapé com informações de contato e links
 */
const Footer = () => {
    return (
        <footer className="text-white py-[8vh] border-t border-[rgba(255,105,180,0.2)] mt-[10vh] text-base flex flex-col items-center bg-[rgba(10,10,26,0.8)] backdrop-blur-[10px] relative overflow-hidden w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full max-w-full p-6 md:p-8 lg:p-12 relative before:content-[''] before:absolute before:-top-1/2 before:-left-1/2 before:w-[200%] before:h-[200%] before:bg-[radial-gradient(circle_at_center,rgba(255,105,180,0.05)_0%,rgba(135,206,235,0.05)_50%,rgba(147,112,219,0.05)_100%)]">
                <div className="relative p-6 md:p-8 bg-[rgba(255,255,255,0.02)] rounded-xl transition-all duration-300 border border-[rgba(255,255,255,0.05)] overflow-hidden hover:-translate-y-1 hover:border-[rgba(255,105,180,0.3)] hover:shadow-[0_0_20px_rgba(255,105,180,0.1)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-br before:from-[rgba(255,105,180,0.1)] before:via-[rgba(135,206,235,0.1)] before:to-[rgba(147,112,219,0.1)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-6 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(255,105,180,0.3)] text-white relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[rgba(255,105,180,0.8)] after:via-[rgba(135,206,235,0.8)] after:to-[rgba(147,112,219,0.8)] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
                        Contato
                    </h3>
                    <div className="relative z-10">
                        <p className="text-[rgba(255,255,255,0.8)] leading-relaxed mb-0 relative z-10 flex items-center gap-4 mb-4">
                            <strong className="text-[rgba(255,105,180,0.9)] font-medium min-w-[120px] text-right">Email:</strong> 
                            <a 
                                href={`mailto:${APP_CONFIG.email}`}
                                className="text-[rgba(255,255,255,0.8)] hover:text-primary transition-colors"
                                aria-label={`Enviar email para ${APP_CONFIG.email}`}
                            >
                                {APP_CONFIG.email}
                            </a>
                        </p>
                        <p className="text-[rgba(255,255,255,0.8)] leading-relaxed mb-0 relative z-10 flex items-center gap-4">
                            <strong className="text-[rgba(255,105,180,0.9)] font-medium min-w-[120px] text-right">Localização:</strong> 
                            <span>Cosmópolis, SP</span>
                        </p>
                    </div>
                </div>

                <div className="relative p-6 md:p-8 bg-[rgba(255,255,255,0.02)] rounded-xl transition-all duration-300 border border-[rgba(255,255,255,0.05)] overflow-hidden hover:-translate-y-1 hover:border-[rgba(255,105,180,0.3)] hover:shadow-[0_0_20px_rgba(255,105,180,0.1)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-br before:from-[rgba(255,105,180,0.1)] before:via-[rgba(135,206,235,0.1)] before:to-[rgba(147,112,219,0.1)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-6 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(255,105,180,0.3)] text-white relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[rgba(255,105,180,0.8)] after:via-[rgba(135,206,235,0.8)] after:to-[rgba(147,112,219,0.8)] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
                        Links
                    </h3>
                    <ul className="list-none p-0 m-0 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li>
                            <a href="#about" className="text-[rgba(255,255,255,0.8)] text-base font-light transition-all duration-300 relative py-3 px-4 flex items-center bg-[rgba(255,255,255,0.02)] rounded-lg border border-[rgba(255,255,255,0.05)] before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-[rgba(255,105,180,0.8)] before:via-[rgba(135,206,235,0.8)] before:to-[rgba(147,112,219,0.8)] before:transition-all before:duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,105,180,0.3)] hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,105,180,0.2)] hover:translate-x-1 hover:before:w-full">
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="text-[rgba(255,255,255,0.8)] text-base font-light transition-all duration-300 relative py-3 px-4 flex items-center bg-[rgba(255,255,255,0.02)] rounded-lg border border-[rgba(255,255,255,0.05)] before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-[rgba(255,105,180,0.8)] before:via-[rgba(135,206,235,0.8)] before:to-[rgba(147,112,219,0.8)] before:transition-all before:duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,105,180,0.3)] hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,105,180,0.2)] hover:translate-x-1 hover:before:w-full">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="text-[rgba(255,255,255,0.8)] text-base font-light transition-all duration-300 relative py-3 px-4 flex items-center bg-[rgba(255,255,255,0.02)] rounded-lg border border-[rgba(255,255,255,0.05)] before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-[rgba(255,105,180,0.8)] before:via-[rgba(135,206,235,0.8)] before:to-[rgba(147,112,219,0.8)] before:transition-all before:duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,105,180,0.3)] hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,105,180,0.2)] hover:translate-x-1 hover:before:w-full">
                                Projetos
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-[rgba(255,255,255,0.8)] text-base font-light transition-all duration-300 relative py-3 px-4 flex items-center bg-[rgba(255,255,255,0.02)] rounded-lg border border-[rgba(255,255,255,0.05)] before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-[rgba(255,105,180,0.8)] before:via-[rgba(135,206,235,0.8)] before:to-[rgba(147,112,219,0.8)] before:transition-all before:duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,105,180,0.3)] hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,105,180,0.2)] hover:translate-x-1 hover:before:w-full">
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="relative p-6 md:p-8 bg-[rgba(255,255,255,0.02)] rounded-xl transition-all duration-300 border border-[rgba(255,255,255,0.05)] overflow-hidden hover:-translate-y-1 hover:border-[rgba(255,105,180,0.3)] hover:shadow-[0_0_20px_rgba(255,105,180,0.1)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-br before:from-[rgba(255,105,180,0.1)] before:via-[rgba(135,206,235,0.1)] before:to-[rgba(147,112,219,0.1)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-6 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(255,105,180,0.3)] text-white relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[rgba(255,105,180,0.8)] after:via-[rgba(135,206,235,0.8)] after:to-[rgba(147,112,219,0.8)] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
                        Redes Sociais
                    </h3>
                    <div className="flex gap-6 mt-4 relative z-10 justify-center md:justify-start">
                        <a 
                            href={APP_CONFIG.socialLinks.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="LinkedIn"
                            className="transition-all duration-300 relative p-3 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] before:content-[''] before:absolute before:-top-0.5 before:-left-0.5 before:-right-0.5 before:-bottom-0.5 before:rounded-full before:bg-gradient-to-br before:from-[rgba(255,105,180,0.5)] before:via-[rgba(135,206,235,0.5)] before:to-[rgba(147,112,219,0.5)] before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-1 hover:rotate-[5deg] hover:bg-[rgba(255,105,180,0.1)] hover:border-[rgba(255,105,180,0.3)] hover:before:opacity-100"
                        >
                            <LinkedinIcon className="w-6 h-6 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110" />
                        </a>
                        <a 
                            href={APP_CONFIG.socialLinks.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="GitHub"
                            className="transition-all duration-300 relative p-3 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] before:content-[''] before:absolute before:-top-0.5 before:-left-0.5 before:-right-0.5 before:-bottom-0.5 before:rounded-full before:bg-gradient-to-br before:from-[rgba(255,105,180,0.5)] before:via-[rgba(135,206,235,0.5)] before:to-[rgba(147,112,219,0.5)] before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-1 hover:rotate-[5deg] hover:bg-[rgba(255,105,180,0.1)] hover:border-[rgba(255,105,180,0.3)] hover:before:opacity-100"
                        >
                            <GithubIcon className="w-6 h-6 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110" />
                        </a>
                        <a 
                            href={`https://api.whatsapp.com/send?phone=${APP_CONFIG.socialLinks.whatsapp}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="WhatsApp"
                            className="transition-all duration-300 relative p-3 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] before:content-[''] before:absolute before:-top-0.5 before:-left-0.5 before:-right-0.5 before:-bottom-0.5 before:rounded-full before:bg-gradient-to-br before:from-[rgba(255,105,180,0.5)] before:via-[rgba(135,206,235,0.5)] before:to-[rgba(147,112,219,0.5)] before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-1 hover:rotate-[5deg] hover:bg-[rgba(255,105,180,0.1)] hover:border-[rgba(255,105,180,0.3)] hover:before:opacity-100"
                        >
                            <WhatsappIcon className="w-6 h-6 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center w-full py-8 border-t border-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.6)] text-sm relative z-10 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-[rgba(255,105,180,0.3)] before:via-[rgba(135,206,235,0.3)] before:via-[rgba(147,112,219,0.3)] before:to-transparent">
                <p>&copy; {new Date().getFullYear()} Andresa Alves. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default memo(Footer);
