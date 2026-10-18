import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, ArrowUp } from 'lucide-react';
import { getWhatsAppLink, getEmailLink } from '../data/academyData';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll to top"
          className="pointer-events-auto w-11 h-11 rounded-full bg-navy-800/90 text-gold-400 border border-gold-500/40 shadow-lg hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 flex items-center justify-center transform hover:scale-110"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Sticky Email Button */}
      <a
        href={getEmailLink()}
        aria-label="Send Email Inquiry"
        className="pointer-events-auto group relative flex items-center bg-navy-800/95 hover:bg-navy-700 text-gold-400 hover:text-gold-300 p-3 rounded-full border border-gold-500/40 shadow-xl shadow-navy-950/60 transition-all duration-300 transform hover:scale-105"
      >
        <Mail className="w-6 h-6 text-gold-400" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold text-cream-100 group-hover:px-2">
          Email Us
        </span>
      </a>

      {/* Sticky Floating WhatsApp Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto group relative flex items-center bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl shadow-emerald-950/60 transition-all duration-300 transform hover:scale-110 border-2 border-white/20"
      >
        {/* Radar ping animation */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping" />

        <MessageCircle className="w-7 h-7 fill-white text-emerald-600 relative z-10" />

        {/* Badge Notification */}
        <span className="absolute -top-1 -left-1 flex h-4 w-4 z-20">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-gold-500 border border-navy-950 text-[9px] font-bold text-navy-950 items-center justify-center">
            1
          </span>
        </span>

        {/* Expanded Tooltip on hover */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold text-white group-hover:px-2.5 relative z-10">
          Chat on WhatsApp (Free Trial)
        </span>
      </a>
    </div>
  );
}
