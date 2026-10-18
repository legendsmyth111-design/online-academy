import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Award, CheckCircle, MessageCircle, ShieldCheck, Heart, Sparkles, BookOpen, Clock, Users, Eye, ExternalLink } from 'lucide-react';
import { IslamicStar, IslamicDivider, GeometricBackground } from '../components/IslamicPattern';
import { ACADEMY_INFO, getWhatsAppLink } from '../data/academyData';

export default function About({ onOpenTrial }) {
  const { t, i18n } = useTranslation();
  const [posterOpen, setPosterOpen] = useState(false);
  const isUrdu = i18n.language === 'ur';

  return (
    <div className="min-h-screen bg-navy-900 text-cream-100">
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 bg-islamic-pattern border-b border-gold-500/20 text-center">
        <GeometricBackground />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/90 border border-gold-500/40 text-gold-400 text-xs font-semibold mb-4">
            <IslamicStar className="w-4 h-4 text-gold-400" />
            <span>Dedicated Quran Scholar</span>
          </div>

          <h1 className="font-amiri text-4xl sm:text-5xl md:text-6xl font-extrabold gold-gradient-text leading-tight mb-4">
            {t('aboutTeacher.title')}
          </h1>

          <p className="text-gold-400 font-semibold text-sm sm:text-base tracking-widest uppercase">
            {t('aboutTeacher.experience')}
          </p>

          <p className="text-xs sm:text-sm text-cream-300 mt-3 max-w-xl mx-auto">
            Specializing in one-on-one Quranic education for kids, girls, boys, women, men, and elders living across the UK, USA, Canada, and Europe.
          </p>
        </div>
      </section>

      {/* Main Teacher Bio Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Teacher Image & Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Outer Golden Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-gold-500/30 to-gold-700/30 rounded-3xl blur-xl opacity-75" />

              <div className="relative bg-navy-950 border-2 border-gold-500/50 rounded-2xl p-4 shadow-2xl overflow-hidden">
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-navy-900">
                  <img
                    src="./assets/teacher.jpg"
                    alt="Maulana Qari Mohammad Fakir"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] bg-gold-500 text-navy-950 font-bold px-2 py-0.5 rounded uppercase">
                      Quran Instructor
                    </span>
                    <h3 className="font-amiri text-2xl font-bold text-white mt-1">
                      Maulana Qari Mohammad Fakir
                    </h3>
                    <p className="text-xs text-gold-400">
                      8+ Years Teaching Overseas Students
                    </p>
                  </div>
                </div>

                {/* Direct Connect Buttons below Image */}
                <div className="mt-4 pt-3 border-t border-gold-500/20 flex gap-2">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 gold-gradient-bg text-navy-950 font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow hover:brightness-110 transition"
                  >
                    <MessageCircle className="w-4 h-4 fill-navy-950" />
                    <span>WhatsApp Chat</span>
                  </a>
                  <button
                    onClick={() => onOpenTrial()}
                    type="button"
                    className="bg-navy-850 hover:bg-navy-800 text-gold-400 border border-gold-500/30 font-semibold py-2.5 px-3 rounded-xl text-xs transition"
                  >
                    3-Day Trial
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Teacher Credentials & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-gold-400 uppercase bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                {t('aboutTeacher.tag')}
              </span>
              <h2 className="font-amiri text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 mt-3 leading-tight">
                {t('aboutTeacher.role')}
              </h2>
            </div>

            <div className="space-y-4 text-sm text-cream-200 leading-relaxed">
              <p>{t('aboutTeacher.bioP1')}</p>
              <p>{t('aboutTeacher.bioP2')}</p>
              <p>{t('aboutTeacher.bioP3')}</p>
            </div>

            {/* Core Teaching Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <div className="bg-navy-850/80 p-3.5 rounded-xl border border-gold-500/20 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-cream-100 text-xs">Patience-First Pedagogy</h4>
                  <p className="text-[11px] text-cream-300 mt-0.5">Gentle, encouraging feedback without any harshness or pressure.</p>
                </div>
              </div>

              <div className="bg-navy-850/80 p-3.5 rounded-xl border border-gold-500/20 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-cream-100 text-xs">Authentic Tajweed Sanad</h4>
                  <p className="text-[11px] text-cream-300 mt-0.5">Precise phonetics from basic Noorani Qaida to full Quran recitation.</p>
                </div>
              </div>

              <div className="bg-navy-850/80 p-3.5 rounded-xl border border-gold-500/20 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-cream-100 text-xs">Overseas Time Adaptation</h4>
                  <p className="text-[11px] text-cream-300 mt-0.5">Flexible scheduling matching UK GMT, US EST/PST, and Canadian routines.</p>
                </div>
              </div>

              <div className="bg-navy-850/80 p-3.5 rounded-xl border border-gold-500/20 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-cream-100 text-xs">Sunnah & Character Grooming</h4>
                  <p className="text-[11px] text-cream-300 mt-0.5">Practical Namaz training, daily Duas, and respectful Islamic manners.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={getWhatsAppLink("", "Assalamu Alaikum Maulana Qari Mohammad Fakir, I read your bio and would like to register my son for the 3 Days Free Trial.")}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-bg text-navy-950 font-bold px-6 py-3.5 rounded-xl shadow-gold-glow hover:brightness-110 transition text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-navy-950" />
                <span>{t('aboutTeacher.contactDirect')}</span>
              </a>

              <button
                onClick={() => setPosterOpen(true)}
                type="button"
                className="bg-navy-800 hover:bg-navy-750 text-gold-400 border border-gold-500/40 px-5 py-3.5 rounded-xl transition text-xs font-semibold flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>{t('aboutTeacher.viewPoster')}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Promotional Poster Showcase */}
      <section className="py-16 bg-navy-950 border-t border-gold-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-gold-400 uppercase bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
              Verified Academy Circular
            </span>
            <h3 className="font-amiri text-3xl sm:text-4xl font-bold text-cream-50 mt-2">
              Official Academy Poster & Announcement
            </h3>
            <p className="text-xs sm:text-sm text-cream-300 mt-2">
              Verified details regarding courses offered, timings, and direct WhatsApp contact lines.
            </p>
          </div>

          <div className="bg-navy-900 border-2 border-gold-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-center gap-8">
            <div
              onClick={() => setPosterOpen(true)}
              className="cursor-pointer group relative rounded-2xl overflow-hidden border-2 border-gold-500/50 shadow-gold-glow max-w-sm shrink-0"
            >
              <img
                src="./assets/poster.jpg"
                alt="Academy Poster"
                className="w-full h-auto object-contain rounded-xl"
              />
              <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/10 flex items-center justify-center transition">
                <span className="bg-gold-500 text-navy-950 font-bold text-xs px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to Expand</span>
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-amiri text-2xl font-bold gold-gradient-text">
                Online Quran Academy (Open for Everyone)
              </h4>
              <p className="text-xs sm:text-sm text-cream-200 leading-relaxed">
                "Small Steps | Big Changes | A Brighter Future" — Offering live one-on-one sessions for kids, girls, boys, women, men, and elders worldwide:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-cream-300">
                <div className="bg-navy-950 p-2.5 rounded-lg border border-gold-500/15">
                  <span className="text-gold-400 font-bold block">1. Noorani Qaida</span>
                  <span>Basic phonetics & Makharij</span>
                </div>
                <div className="bg-navy-950 p-2.5 rounded-lg border border-gold-500/15">
                  <span className="text-gold-400 font-bold block">2. Nazra Quran</span>
                  <span>Fluent recitation & Waqf rules</span>
                </div>
                <div className="bg-navy-950 p-2.5 rounded-lg border border-gold-500/15">
                  <span className="text-gold-400 font-bold block">3. Namaz Lesson</span>
                  <span>Salah method, Wudu & Fiqh</span>
                </div>
                <div className="bg-navy-950 p-2.5 rounded-lg border border-gold-500/15">
                  <span className="text-gold-400 font-bold block">4. Masnoon Dua</span>
                  <span>Daily Sunnah supplications</span>
                </div>
                <div className="bg-navy-950 p-2.5 rounded-lg border border-gold-500/15 col-span-full">
                  <span className="text-gold-400 font-bold block">5. Hifzul-ul-Quran</span>
                  <span>Step-by-step Quran memorization with revision</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4 text-xs">
                <div>
                  <span className="text-cream-300 block">WhatsApp Helplines:</span>
                  <span className="text-gold-400 font-bold">03496663059 • +92 346 1089824</span>
                </div>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-gradient-bg text-navy-950 font-bold px-4 py-2 rounded-lg text-xs"
                >
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox / Modal for Poster */}
      {posterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md">
          <div className="relative max-w-2xl w-full bg-navy-900 border-2 border-gold-500/50 rounded-2xl p-4 shadow-2xl">
            <button
              onClick={() => setPosterOpen(false)}
              className="absolute top-3 right-3 p-2 bg-navy-950/80 rounded-full text-cream-200 hover:text-gold-400 border border-gold-500/30 transition z-10"
              aria-label="Close Poster"
            >
              ✕
            </button>
            <div className="max-h-[80vh] overflow-y-auto rounded-xl">
              <img
                src="./assets/poster.jpg"
                alt="Academy Poster Full"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-cream-300">Online Quran Academy Official Poster</span>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-bg text-navy-950 font-bold px-4 py-2 rounded-lg"
              >
                Enroll on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
