import React from 'react';

export const IslamicStar = ({ className = "w-6 h-6 text-gold-500", ...props }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
    {...props}
  >
    {/* 8-Point Rub el Hizb Islamic Star */}
    <path d="M50 0 L62 25 L88 12 L75 38 L100 50 L75 62 L88 88 L62 75 L50 100 L38 75 L12 88 L25 62 L0 50 L25 38 L12 12 L38 25 Z" opacity="0.9" />
    <circle cx="50" cy="50" r="14" fill="#0B1F3A" stroke="currentColor" strokeWidth="3" />
    <circle cx="50" cy="50" r="5" fill="currentColor" />
  </svg>
);

export const IslamicCrescent = ({ className = "w-6 h-6 text-gold-500", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.82 0 5.38-1.17 7.21-3.06-4.52.88-8.71-2.58-8.71-7.19 0-3.9 2.97-7.1 6.84-7.69C15.68 2.75 13.91 2 12 2zm7.5 4.5l.88 1.91 2.07.19-1.55 1.39.46 2.03-1.86-1.07-1.86 1.07.46-2.03-1.55-1.39 2.07-.19.88-1.91z" />
  </svg>
);

export const IslamicDivider = ({ label = "" }) => (
  <div className="flex items-center justify-center my-6 gap-3">
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
    <IslamicStar className="w-5 h-5 text-gold-500 animate-spin-slow" />
    {label && <span className="text-xs uppercase tracking-widest text-gold-400 font-medium px-2">{label}</span>}
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
  </div>
);

export const GeometricBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
    <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl" />
    <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-navy-600/40 blur-3xl" />
    <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl" />
  </div>
);
