import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, Globe, BookOpen, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { IslamicStar } from './IslamicPattern';
import { ACADEMY_INFO, getWhatsAppLink } from '../data/academyData';

export default function Navbar({ onOpenTrial }) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'ur' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.courses'), path: '/courses' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isRtl = i18n.language === 'ur';

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-navy-950 via-navy-800 to-navy-950 border-b border-gold-500/20 text-xs py-1.5 px-4 text-cream-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-gold-500/20 text-gold-400 px-2 py-0.5 rounded-full text-[11px] font-semibold border border-gold-500/30">
              <ShieldCheck className="w-3 h-3 text-gold-400" />
              {t('nav.forEveryone')}
            </span>
            <span className="hidden md:inline text-cream-300">|</span>
            <span className="hidden md:inline text-cream-300 text-[11px]">
              UK, USA, Canada & Overseas Students Welcome
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={`tel:${ACADEMY_INFO.whatsappNumbers[0].raw}`}
              className="flex items-center gap-1.5 text-cream-300 hover:text-gold-400 transition"
            >
              <Phone className="w-3 h-3 text-gold-400" />
              <span>{ACADEMY_INFO.whatsappNumbers[0].display}</span>
            </a>
            <span className="text-gold-500/40">•</span>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 font-medium underline flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              <span>3 Days FREE Demo Available</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-900/95 backdrop-blur-md shadow-xl shadow-navy-950/50 border-b border-gold-500/30 py-3'
            : 'bg-navy-900/80 backdrop-blur-sm border-b border-gold-500/15 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 p-0.5 shadow-gold-glow flex items-center justify-center transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                  <IslamicStar className="w-7 h-7 text-gold-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-amiri text-xl sm:text-2xl font-bold tracking-wide gold-gradient-text leading-tight">
                  {i18n.language === 'ur' ? 'آن لائن قرآن اکیڈمی' : 'Online Quran Academy'}
                </span>
                <span className="text-[10px] sm:text-xs text-cream-300 tracking-wider uppercase font-medium">
                  {i18n.language === 'ur' ? 'بچے، خواتین و مرد • برائے بیرونِ ملک' : 'For Kids, Women & Men • Overseas UK/USA'}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                      isActive
                        ? 'text-gold-400 bg-navy-800/80 shadow-sm border border-gold-500/30'
                        : 'text-cream-200 hover:text-gold-300 hover:bg-navy-800/40'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gold-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side Actions: Language Toggle & CTA */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                type="button"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy-800 border border-gold-500/40 hover:border-gold-400 text-cream-100 hover:text-gold-400 text-xs font-semibold tracking-wider transition-all shadow-sm group"
                title="Switch Language (English / Urdu)"
              >
                <Globe className="w-3.5 h-3.5 text-gold-400 group-hover:rotate-45 transition-transform duration-300" />
                <span className={i18n.language === 'en' ? 'text-gold-400 font-bold' : 'text-cream-300'}>
                  EN
                </span>
                <span className="text-gold-500/40">|</span>
                <span className={i18n.language === 'ur' ? 'text-gold-400 font-bold font-nastaliq' : 'text-cream-300'}>
                  اردو
                </span>
              </button>

              {/* Free Trial Button */}
              <button
                onClick={onOpenTrial}
                type="button"
                className="gold-gradient-bg text-navy-950 font-semibold px-4 py-2 rounded-lg text-xs uppercase tracking-wider hover:brightness-110 shadow-gold-glow transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 fill-navy-950" />
                <span>{t('nav.trialBtn')}</span>
              </button>
            </div>

            {/* Mobile Menu & Language Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleLanguage}
                type="button"
                className="px-2.5 py-1 rounded-full bg-navy-800 border border-gold-500/40 text-cream-100 text-xs font-semibold flex items-center gap-1"
              >
                <Globe className="w-3 h-3 text-gold-400" />
                <span>{i18n.language === 'en' ? 'اردو' : 'EN'}</span>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-navy-800 text-gold-400 hover:bg-navy-700 focus:outline-none border border-gold-500/30"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-navy-950/95 border-b border-gold-500/30 px-4 pt-3 pb-6 mt-3 space-y-2 backdrop-blur-lg animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition ${
                  location.pathname === link.path
                    ? 'bg-navy-800 text-gold-400 border border-gold-500/40'
                    : 'text-cream-200 hover:bg-navy-850 hover:text-gold-300'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-3 border-t border-gold-500/20 space-y-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenTrial();
                }}
                className="w-full text-center gold-gradient-bg text-navy-950 font-bold py-2.5 rounded-lg text-sm shadow-gold-glow"
              >
                {t('nav.trialBtn')}
              </button>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 py-2 rounded-lg text-xs font-semibold"
              >
                Direct WhatsApp Chat: 0349 6663059
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
