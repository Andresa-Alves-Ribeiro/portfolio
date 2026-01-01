import React, { useState, useEffect } from 'react'
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/github-nav.svg';
import { ReactComponent as WhatsappIcon } from '../../assets/whatsapp.svg';
import { useTheme } from '../../hooks/useTheme';
import { scrollToElement } from '../../utils/helpers';

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
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
      isDarkMode 
        ? 'bg-[rgba(5,5,16,0.8)] border-b border-[rgba(135,206,235,0.2)] shadow-[0_0_20px_rgba(135,206,235,0.1)]' 
        : 'bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] border-b border-[rgba(255,105,180,0.2)] shadow-[0_0_20px_rgba(255,105,180,0.1)]'
    } ${scrolled ? 'py-2' : 'py-4'}`}>
      <ul className="flex justify-between items-center list-none relative max-w-[1400px] mx-auto w-full px-4 md:px-8">
        <div className="flex gap-4 md:gap-8 items-center relative before:content-[''] before:absolute before:top-1/2 before:-left-5 before:w-px before:h-[30px] before:bg-gradient-to-b before:from-transparent before:via-[rgba(255,105,180,0.5)] before:via-[rgba(135,206,235,0.5)] before:via-[rgba(147,112,219,0.5)] before:to-transparent before:-translate-y-1/2 before:animate-pulse md:before:block before:hidden">
          <li className="m-0 relative">
            <a 
              href="https://www.linkedin.com/in/andresa-alves-ribeiro/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative inline-block p-2 rounded transition-all duration-300 hover:scale-110 hover:rotate-[5deg] group"
            >
              <LinkedinIcon className="w-6 h-6 transition-all duration-300 grayscale group-hover:grayscale-0" />
            </a>
          </li>
          <li className="m-0 relative">
            <a 
              href="https://github.com/Andresa-Alves-Ribeiro" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative inline-block p-2 rounded transition-all duration-300 hover:scale-110 hover:rotate-[5deg] group"
            >
              <GithubIcon className="w-6 h-6 transition-all duration-300 grayscale group-hover:grayscale-0" />
            </a>
          </li>
          <li className="m-0 relative">
            <a 
              href="https://api.whatsapp.com/send?phone=5519997516202" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative inline-block p-2 rounded transition-all duration-300 hover:scale-110 hover:rotate-[5deg] group"
            >
              <WhatsappIcon className="w-6 h-6 transition-all duration-300 grayscale group-hover:grayscale-0" />
            </a>
          </li>
          <li className="m-0 relative">
            <button 
              onClick={toggleTheme} 
              className="bg-transparent border-none cursor-pointer text-2xl p-1 rounded-full transition-all duration-300 relative overflow-hidden hover:bg-[rgba(255,255,255,0.1)]"
              aria-label={`Mudar para tema ${isDarkMode ? 'claro' : 'escuro'}`}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </div>

        <div className={`md:flex gap-4 md:gap-8 relative after:content-[''] after:absolute after:top-1/2 after:-right-5 after:w-px after:h-[30px] after:bg-gradient-to-b after:from-transparent after:via-[rgba(147,112,219,0.5)] after:via-[rgba(135,206,235,0.5)] after:via-[rgba(255,105,180,0.5)] after:to-transparent after:-translate-y-1/2 after:animate-pulse md:after:block after:hidden ${
          isMenuOpen 
            ? 'fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-[rgba(255,255,255,0.98)] backdrop-blur-[10px] p-8 flex-col gap-8 border-t border-[rgba(255,105,180,0.2)] translate-x-0 overflow-y-auto z-[1000]' 
            : 'hidden md:flex translate-x-[-100%]'
        }`}>
          <li className="m-0 relative">
            <a 
              href="#about" 
              className={`text-white no-underline font-medium transition-all duration-300 relative px-4 py-2 rounded bg-transparent uppercase tracking-widest text-sm before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-[rgba(255,105,180,0.8)] before:via-[rgba(135,206,235,0.8)] before:to-[rgba(147,112,219,0.8)] before:transition-all before:duration-300 before:-translate-x-1/2 before:shadow-[0_0_10px_rgba(255,105,180,0.3)] hover:text-[#ff69b4] hover:drop-shadow-[0_0_10px_rgba(255,105,180,0.5)] hover:before:w-4/5`}
              onClick={handleNavClick}
            >
              Sobre
            </a>
          </li>
          <li className="m-0 relative">
            <a 
              href="#skills" 
              className={`text-white no-underline font-medium transition-all duration-300 relative px-4 py-2 rounded bg-transparent uppercase tracking-widest text-sm before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-[rgba(255,105,180,0.8)] before:via-[rgba(135,206,235,0.8)] before:to-[rgba(147,112,219,0.8)] before:transition-all before:duration-300 before:-translate-x-1/2 before:shadow-[0_0_10px_rgba(255,105,180,0.3)] hover:text-[#ff69b4] hover:drop-shadow-[0_0_10px_rgba(255,105,180,0.5)] hover:before:w-4/5`}
              onClick={handleNavClick}
            >
              Skills
            </a>
          </li>
          <li className="m-0 relative">
            <a 
              href="#projects" 
              className={`text-white no-underline font-medium transition-all duration-300 relative px-4 py-2 rounded bg-transparent uppercase tracking-widest text-sm before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-[rgba(255,105,180,0.8)] before:via-[rgba(135,206,235,0.8)] before:to-[rgba(147,112,219,0.8)] before:transition-all before:duration-300 before:-translate-x-1/2 before:shadow-[0_0_10px_rgba(255,105,180,0.3)] hover:text-[#ff69b4] hover:drop-shadow-[0_0_10px_rgba(255,105,180,0.5)] hover:before:w-4/5`}
              onClick={handleNavClick}
            >
              Projetos
            </a>
          </li>
          <li className="m-0 relative">
            <a 
              href="#contact" 
              className={`text-white no-underline font-medium transition-all duration-300 relative px-4 py-2 rounded bg-transparent uppercase tracking-widest text-sm before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-[rgba(255,105,180,0.8)] before:via-[rgba(135,206,235,0.8)] before:to-[rgba(147,112,219,0.8)] before:transition-all before:duration-300 before:-translate-x-1/2 before:shadow-[0_0_10px_rgba(255,105,180,0.3)] hover:text-[#ff69b4] hover:drop-shadow-[0_0_10px_rgba(255,105,180,0.5)] hover:before:w-4/5`}
              onClick={handleNavClick}
            >
              Contato
            </a>
          </li>
        </div>

        <li className="md:hidden ml-auto relative z-[1001]">
          <button 
            onClick={toggleMenu}
            className={`flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1 z-[1001]`}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'translate-y-2 rotate-45' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}></span>
          </button>
        </li>
      </ul>
    </header>
  )
}

export default Header;