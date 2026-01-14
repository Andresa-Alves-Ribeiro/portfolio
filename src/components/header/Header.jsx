import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { scrollToElement } from '../../utils/helpers';
import InicialLogo from '../../assets/iniciais.png';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/github-nav.svg';
import { ReactComponent as WhatsappIcon } from '../../assets/whatsapp.svg';
import { APP_CONFIG } from '../../constants/config';
import LanguageSelector from '../languageSelector';
import { getWindow, getWindowHeight, getScrollY } from '../../utils/environment';

/**
 * Componente Header/Navbar futurista reutilizável
 * @param {Object} props - Propriedades do componente
 * @param {boolean} props.isInPresentation - Se está na seção de apresentação (afeta estilo)
 * @param {boolean} props.showNavLinks - Se deve mostrar os links de navegação (sobre, timeline, etc)
 * @returns {JSX.Element} Header/Navbar
 */
const Header = ({ isInPresentation = false, showNavLinks = true }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const win = getWindow();
    if (!win) return;

    const handleScroll = () => {
      if (showNavLinks) {
        const presentationElement = document.getElementById('presentation');
        if (presentationElement) {
          const rect = presentationElement.getBoundingClientRect();
          const innerHeight = getWindowHeight(1080);
          setIsScrolled(rect.top < -100 || rect.bottom <= innerHeight * 0.5);
        } else {
          const scrollY = getScrollY(0);
          setIsScrolled(scrollY > 50);
        }
      } else {
        const scrollY = getScrollY(0);
        setIsScrolled(scrollY > 50);
      }
    };

    handleScroll();
    win.addEventListener('scroll', handleScroll, { passive: true });
    return () => win.removeEventListener('scroll', handleScroll);
  }, [showNavLinks]);

  const handleNavClick = (e) => {
    e.preventDefault();
    const link = e.currentTarget;
    const targetId = link.getAttribute('href')?.substring(1);
    if (targetId) {
      if (location.pathname === '/') {
        scrollToElement(targetId);
      } else {
        // Se não estiver na home, navegar para home primeiro
        const win = getWindow();
        if (win) {
          win.location.href = `/#${targetId}`;
        }
      }
    }
  };

  const handleLogoClick = () => {
    const win = getWindow();
    if (!win) return;

    if (location.pathname === '/') {
      win.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      win.location.href = '/';
    }
  };

  const shouldShowTransparent = isInPresentation && !isScrolled;

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1001] px-6 md:px-12 lg:px-16 py-6 transition-all duration-500 ${
      shouldShowTransparent ? 'bg-transparent' : 'glass-effect bg-[#0a0a0f]/80 backdrop-blur-xl'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          onClick={handleLogoClick}
          className={`font-bold text-xl md:text-2xl tracking-wide transition-colors duration-500 cursor-pointer ${
            shouldShowTransparent ? 'text-white neon-text' : 'text-pink-500'
          }`}
          aria-label="Home"
        >
          <img src={InicialLogo} alt="Logo" className="w-16 h-16 md:w-14 md:h-14" />
        </button>

        <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
          {showNavLinks && (
            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              {[
                { label: t('nav.about'), href: '#about' },
                { label: t('nav.timeline'), href: '#timeline' },
                { label: t('nav.skills'), href: '#skills' },
                { label: t('nav.projects'), href: '#projects' },
                { label: t('nav.contact'), href: '#contact' }
              ].map((item, index) => (
                <React.Fragment key={item.label}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className={`relative text-xs lg:text-sm font-medium tracking-wider uppercase transition-all duration-300 group ${
                      shouldShowTransparent ? 'text-white/80' : 'text-white/60'
                    }`}
                  >
                    <span className="relative z-10 group-hover:text-pink-500 transition-colors duration-300">
                      {item.label}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                    <span className="absolute inset-0 bg-pink-500/10 rounded-md opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></span>
                  </a>
                  {index < 4 && (
                    <span className={`text-xs mx-1 transition-colors duration-500 ${
                      shouldShowTransparent ? 'text-white/30' : 'text-white/20'
                    }`}>•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          <div className="flex items-center gap-3 md:gap-4">
            <a 
              href={APP_CONFIG.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`group relative transition-all duration-300 ${
                shouldShowTransparent ? 'text-white/80' : 'text-white/60'
              }`}
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:text-pink-500 group-hover:scale-110 group-hover:rotate-3" style={{ fill: 'currentColor' }} />
              <span className="absolute inset-0 bg-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></span>
            </a>
            <a 
              href={APP_CONFIG.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`group relative transition-all duration-300 ${
                shouldShowTransparent ? 'text-white/80' : 'text-white/60'
              }`}
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:text-pink-500 group-hover:scale-110 group-hover:rotate-3" style={{ fill: 'currentColor' }} />
              <span className="absolute inset-0 bg-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></span>
            </a>
            <a 
              href={`https://api.whatsapp.com/send?phone=${APP_CONFIG.socialLinks.whatsapp}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`group relative transition-all duration-300 ${
                shouldShowTransparent ? 'text-white/80' : 'text-white/60'
              }`}
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:text-pink-500 group-hover:scale-110 group-hover:rotate-3" style={{ fill: 'currentColor' }} />
              <span className="absolute inset-0 bg-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></span>
            </a>
          </div>

          {/* Seletor de idioma no final do header */}
          <LanguageSelector isInPresentation={shouldShowTransparent} />
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  isInPresentation: PropTypes.bool,
  showNavLinks: PropTypes.bool,
};

export default Header;
