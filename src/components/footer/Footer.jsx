import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/github-nav.svg';
import { ReactComponent as WhatsappIcon } from '../../assets/whatsapp.svg';
import { APP_CONFIG } from '../../constants/config';
import { scrollToElement } from '../../utils/helpers';


const Footer = () => {
    const { t } = useTranslation();
    const handleNavClick = useCallback((e) => {
        e.preventDefault();
        const targetId = e.target.closest('a').getAttribute('href')?.substring(1);
        if (targetId) {
            scrollToElement(targetId);
        }
    }, []);

    return (
        <footer className="relative pt-12 md:pt-16 pb-0 border-t border-pink-500/20 bg-gradient-to-b from-[#0a0a0f] via-[#1a0a1a] to-[#0a0a0f] text-white overflow-hidden w-full">
            
            <div className="absolute inset-0 tech-grid opacity-5"></div>

            
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                
                
                <div className="glass-effect rounded-xl p-6 border border-pink-500/20">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="text-pink-500">📧</span>
                        {t('footer.contact')}
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-pink-400 font-semibold min-w-[80px]">Email:</span>
                            <a 
                                href={`mailto:${APP_CONFIG.email}`}
                                className="text-white/70 hover:text-pink-400 transition-colors duration-300 break-all"
                                aria-label={`Send email to ${APP_CONFIG.email}`}
                            >
                                {APP_CONFIG.email}
                            </a>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-pink-400 font-semibold min-w-[80px]">Location:</span>
                            <span className="text-white/70">Cosmópolis, SP</span>
                        </div>
                    </div>
                </div>

                
                <div className="glass-effect rounded-xl p-6 border border-pink-500/20">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="text-pink-500">🔗</span>
                        {t('footer.links')}
                    </h3>
                    <ul className="grid grid-cols-2 gap-3">
                        {[
                            { href: '#about', label: t('nav.about'), icon: '💕' },
                            { href: '#skills', label: t('nav.skills'), icon: '✨' },
                            { href: '#projects', label: t('nav.projects'), icon: '🐱' },
                            { href: '#contact', label: t('nav.contact'), icon: '💌' },
                        ].map((link) => (
                            <li key={link.href}>
                                <a 
                                    href={link.href} 
                                    onClick={handleNavClick} 
                                    className="group flex items-center gap-2 px-4 py-2 glass-effect rounded-lg border border-pink-500/20 text-white/80 hover:text-pink-400 hover:border-pink-500/50 transition-all duration-300 hover:scale-105"
                                >
                                    <span>{link.icon}</span>
                                    <span className="text-sm font-medium">{link.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                
                <div className="glass-effect rounded-xl p-6 border border-pink-500/20">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="text-pink-500">🌐</span>
                        {t('footer.socialMedia')}
                    </h3>
                    <div className="flex gap-4">
                        <a 
                            href={APP_CONFIG.socialLinks.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="LinkedIn"
                            className="group p-3 glass-effect rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,20,147,0.3)]"
                        >
                            <LinkedinIcon className="w-6 h-6 text-white/80 group-hover:text-pink-400 transition-colors duration-300" style={{ fill: 'currentColor' }} />
                        </a>
                        <a 
                            href={APP_CONFIG.socialLinks.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="GitHub"
                            className="group p-3 glass-effect rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,20,147,0.3)]"
                        >
                            <GithubIcon className="w-6 h-6 text-white/80 group-hover:text-pink-400 transition-colors duration-300" style={{ fill: 'currentColor' }} />
                        </a>
                        <a 
                            href={`https://api.whatsapp.com/send?phone=${APP_CONFIG.socialLinks.whatsapp}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="WhatsApp"
                            className="group p-3 glass-effect rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,20,147,0.3)]"
                        >
                            <WhatsappIcon className="w-6 h-6 text-white/80 group-hover:text-pink-400 transition-colors duration-300" style={{ fill: 'currentColor' }} />
                        </a>
                    </div>
                </div>
            </div>

            
            <div className="relative z-10 text-center w-full py-8 border-t border-pink-500/20 mt-8">
                <p className="text-white/60 text-sm flex items-center justify-center gap-2">
                    <span>©</span>
                    {new Date().getFullYear()} Andresa Alves. {t('footer.allRightsReserved')}
                </p>
            </div>
        </footer>
    );
};

export default memo(Footer);
