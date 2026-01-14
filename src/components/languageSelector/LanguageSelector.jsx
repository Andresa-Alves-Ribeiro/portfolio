import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language || 'pt';

  const getButtonClassName = (language) => {
    const isActive = currentLanguage === language;
    if (isActive) {
      return 'bg-pink-500/30 border-2 border-pink-500 shadow-[0_0_15px_rgba(255,20,147,0.5)] scale-105';
    }
    return 'border-2 border-transparent hover:border-pink-500/40 hover:bg-white/10';
  };

  return (
    <div className="flex items-center gap-1.5 md:gap-2">
      <button
        onClick={() => changeLanguage('pt')}
        className={`relative px-2.5 py-2 md:px-3 md:py-2.5 rounded-lg transition-all duration-300 group ${getButtonClassName('pt')}`}
        aria-label="Português"
        title="Português"
      >
        <div className={`transition-transform duration-300 ${
          currentLanguage === 'pt' ? 'scale-110' : 'group-hover:scale-110'
        }`}>
          <ReactCountryFlag
            countryCode="BR"
            svg
            style={{
              width: '1.5em',
              height: '1.5em',
            }}
            title="BR"
          />
        </div>
        {currentLanguage === 'pt' && (
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-pink-500 animate-pulse"></span>
        )}
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`relative px-2.5 py-2 md:px-3 md:py-2.5 rounded-lg transition-all duration-300 group ${getButtonClassName('en')}`}
        aria-label="English"
        title="English"
      >
        <div className={`transition-transform duration-300 ${
          currentLanguage === 'en' ? 'scale-110' : 'group-hover:scale-110'
        }`}>
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{
              width: '1.5em',
              height: '1.5em',
            }}
            title="US"
          />
        </div>
        {currentLanguage === 'en' && (
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-pink-500 animate-pulse"></span>
        )}
      </button>
    </div>
  );
};

export default LanguageSelector;
