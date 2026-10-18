import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sparkles, MessageCircle, CheckCircle, Star, ShieldCheck, ArrowRight, Video, Calendar, Users, Home as HomeIcon, Award, Heart, Phone, Eye, ExternalLink } from 'lucide-react';
import { IslamicStar, IslamicDivider, GeometricBackground } from '../components/IslamicPattern';
import CourseCard from '../components/CourseCard';
import { COURSES, TESTIMONIALS, ACADEMY_INFO, getWhatsAppLink } from '../data/academyData';

export default function Home({ onOpenTrial }) {
  const { t, i18n } = useTranslation();
  const [posterOpen, setPosterOpen] = useState(false);
  const isUrdu = i18n.language === 'ur';

  return (
    <div className="relative min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-islamic-pattern">
        <GeometricBackground />

        {/* Ambient Serene Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-gold-500/15 via-gold-600/5 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (Hero Content) */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-800/90 border border-gold-500/40 text-gold-400 text-xs font-semibold shadow-gold-glow">
                <Sparkles className="w-4 h-4 fill-gold-400" />
                <span>{t('hero.badge')}</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-amiri text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-cream-50 leading-[1.2]">
                <span>{t('hero.titlePrefix')} </span>
                <span className="gold-gradient-text block sm:inline">
                  {t('hero.titleHighlight')}
                </span>
              </h1>

              {/* Tagline / Subtitle */}
              <p className="text-gold-400 font-semibold text-sm sm:text-base tracking-widest uppercase">
                {t('hero.subtitle')}
              </p>

              {/* Description */}
              <p className="text-cream-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t('hero.description')}
              </p>

              {/* Trust Tagline Pill */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 bg-navy-800/80 border border-gold-500/30 text-cream-200 text-xs px-3 py-1.5 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-gold-400" />
                  <span>{t('hero.taglinePill')}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-navy-800/80 border border-gold-500/30 text-cream-200 text-xs px-3 py-1.5 rounded-lg">
                  <Video className="w-4 h-4 text-emerald-400" />
                  <span>Zoom 1-to-1 Live</span>
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href={getWhatsAppLink("", "I want to start the 3 Days Free Trial for my son.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto gold-gradient-bg text-navy-950 font-bold px-7 py-3.5 rounded-xl shadow-gold-glow hover:brightness-110 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2.5 text-sm uppercase tracking-wider"
                >
                  <MessageCircle className="w-5 h-5 fill-navy-950" />
                  <span>{t('hero.ctaPrimary')}</span>
                </a>

                <button
                  onClick={() => onOpenTrial()}
                  type="button"
                  className="w-full sm:w-auto bg-navy-800/90 hover:bg-navy-750 text-gold-400 border border-gold-500/40 hover:border-gold-300 font-semibold px-6 py-3.5 rounded-xl transition duration-200 flex items-center justify-center gap-2 text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book via Form</span>
                </button>
              </div>

              {/* Quick Perks Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-gold-500/20 text-xs text-cream-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{t('hero.stat1')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{t('hero.stat2')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{t('hero.stat3')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{t('hero.stat4')}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Card with Teacher & Poster Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                {/* Gold Glow behind card */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-gold-500 to-gold-700 rounded-2xl blur-lg opacity-40 animate-soft-pulse" />

                <div className="relative bg-navy-850 border-2 border-gold-500/50 rounded-2xl p-5 shadow-2xl overflow-hidden">
                  {/* Card Header with Islamic Star */}
                  <div className="flex items-center justify-between pb-3 border-b border-gold-500/20 mb-4">
                    <div className="flex items-center gap-2">
                      <IslamicStar className="w-5 h-5 text-gold-400" />
                      <span className="font-amiri text-lg font-bold text-cream-100">
                        {ACADEMY_INFO.name}
                      </span>
                    </div>
                    <span className="text-[10px] bg-gold-500/20 text-gold-300 border border-gold-500/30 px-2 py-0.5 rounded-full font-bold">
                      FOR EVERYONE (KIDS, WOMEN & MEN)
                    </span>
                  </div>

                  {/* Teacher Photo & Quick Info */}
                  <div className="relative rounded-xl overflow-hidden mb-4 border border-gold-500/30 group">
                    <img
                      src="./assets/teacher.jpg"
                      alt={ACADEMY_INFO.teacher.name}
                      className="w-full h-72 object-cover object-top transition duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback if local relative image isn't loaded in some context
                        e.target.src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                    
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-[11px] text-gold-400 font-semibold tracking-wider uppercase">
                        Lead Quran Scholar & Qari
                      </p>
                      <h3 className="font-amiri text-2xl font-bold text-white leading-tight">
                        {ACADEMY_INFO.teacher.name}
                      </h3>
                      <p className="text-xs text-cream-200 mt-0.5 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-gold-400" />
                        <span>8+ Years Teaching Overseas Students (All Ages)</span>
                      </p>
                    </div>
                  </div>

                  {/* Poster Preview Button */}
                  <div className="flex items-center justify-between gap-3 bg-navy-900/90 p-3 rounded-xl border border-gold-500/20">
                    <div className="text-xs">
                      <span className="text-gold-400 font-semibold block">Official Academy Poster</span>
                      <span className="text-[11px] text-cream-300">View complete details & certifications</span>
                    </div>
                    <button
                      onClick={() => setPosterOpen(true)}
                      type="button"
                      className="inline-flex items-center gap-1 bg-gold-500/20 hover:bg-gold-500/30 text-gold-400 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gold-500/30 transition"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                    </button>
                  </div>

                  {/* Direct Contact Bar */}
                  <div className="mt-4 pt-3 border-t border-gold-500/20 flex items-center justify-between text-xs">
                    <span className="text-cream-300">WhatsApp: 0349 6663059</span>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-navy-950" />
                      <span>Chat Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR SECTION */}
      <section className="bg-navy-950 border-y border-gold-500/25 py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {ACADEMY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="p-3">
                <span className="font-amiri text-3xl sm:text-4xl font-extrabold gold-gradient-text block">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-cream-200 font-medium tracking-wide mt-1 block">
                  {isUrdu ? stat.labelUr : stat.labelEn}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section className="py-20 bg-navy-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-widest text-gold-400 uppercase bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30 mb-2">
              {t('features.tag')}
            </span>
            <h2 className="font-amiri text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 leading-tight">
              {t('features.title')}
            </h2>
            <p className="text-sm sm:text-base text-cream-300 mt-3">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="islamic-card p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-amiri text-2xl font-bold text-cream-100 mb-2">
                {t('features.f1Title')}
              </h3>
              <p className="text-xs text-cream-300 leading-relaxed">
                {t('features.f1Desc')}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="islamic-card p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-amiri text-2xl font-bold text-cream-100 mb-2">
                {t('features.f2Title')}
              </h3>
              <p className="text-xs text-cream-300 leading-relaxed">
                {t('features.f2Desc')}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="islamic-card p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-4">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-amiri text-2xl font-bold text-cream-100 mb-2">
                {t('features.f3Title')}
              </h3>
              <p className="text-xs text-cream-300 leading-relaxed">
                {t('features.f3Desc')}
              </p>
            </div>

            {/* Feature 4 */}
            <div className="islamic-card p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-4">
                <HomeIcon className="w-6 h-6" />
              </div>
              <h3 className="font-amiri text-2xl font-bold text-cream-100 mb-2">
                {t('features.f4Title')}
              </h3>
              <p className="text-xs text-cream-300 leading-relaxed">
                {t('features.f4Desc')}
              </p>
            </div>

            {/* Feature 5 */}
            <div className="islamic-card p-6 rounded-2xl border-gold-500/50 bg-gradient-to-br from-navy-800 to-navy-900">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-amiri text-2xl font-bold text-gold-400 mb-2">
                {t('features.f5Title')}
              </h3>
              <p className="text-xs text-cream-300 leading-relaxed">
                {t('features.f5Desc')}
              </p>
            </div>

            {/* Feature 6 */}
            <div className="islamic-card p-6 rounded-2xl border-gold-500/50 bg-gradient-to-br from-navy-800 to-navy-900">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-amiri text-2xl font-bold text-gold-400 mb-2">
                {t('features.f6Title')}
              </h3>
              <p className="text-xs text-cream-300 leading-relaxed">
                {t('features.f6Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COURSES PREVIEW SECTION */}
      <section className="py-20 bg-navy-950 relative border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-gold-400 uppercase bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                {t('courses.tag')}
              </span>
              <h2 className="font-amiri text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 mt-2">
                {t('courses.title')}
              </h2>
              <p className="text-xs sm:text-sm text-cream-300 mt-2">
                {t('courses.subtitle')}
              </p>
            </div>

            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-xs font-bold gold-gradient-text hover:underline tracking-wider uppercase"
            >
              <span>View All 7 Courses & Curriculum</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} onSelectTrial={onOpenTrial} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 gold-gradient-bg text-navy-950 font-bold px-8 py-3.5 rounded-xl shadow-gold-glow hover:brightness-110 transition text-sm"
            >
              <span>Explore All 7 Quran & Islamic Courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PROMOTIONAL POSTER BANNER / SHOWCASE */}
      <section className="py-16 bg-navy-900 border-t border-gold-500/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy-950 via-navy-850 to-navy-950 border-2 border-gold-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Poster Thumbnail */}
              <div className="lg:col-span-5 text-center">
                <div
                  onClick={() => setPosterOpen(true)}
                  className="cursor-pointer group relative inline-block rounded-2xl overflow-hidden border-2 border-gold-500/50 shadow-gold-glow transform hover:scale-[1.02] transition duration-300"
                >
                  <img
                    src="./assets/poster.jpg"
                    alt="Online Quran Academy Poster"
                    className="w-full max-w-sm max-h-[420px] object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/10 flex items-center justify-center transition">
                    <span className="bg-gold-500/90 text-navy-950 font-bold text-xs px-3.5 py-2 rounded-lg shadow-lg flex items-center gap-1.5 transform group-hover:scale-110 transition">
                      <Eye className="w-4 h-4" />
                      <span>Click to Enlarge Poster</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-block text-[11px] font-bold tracking-widest text-gold-400 uppercase bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                  Official Academy Announcement
                </span>
                <h3 className="font-amiri text-3xl sm:text-4xl font-bold text-cream-50 leading-tight">
                  03 Days FREE Demo Classes Available Now
                </h3>
                <p className="text-sm text-cream-200 leading-relaxed">
                  Join Maulana Qari Mohammad Fakir for live one-on-one sessions tailored for students of all ages (kids, girls, boys, women, men, and elders) overseas. 
                  Learn Noorani Qaida, Nazra, Hifz, Tajweed, Namaz, and Masnoon Duas from the comfort and safety of your home.
                </p>

                <div className="space-y-2 pt-2 text-xs text-cream-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold-400" />
                    <span>Flexible timings accommodating UK GMT, USA EST/PST, and Canada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold-400" />
                    <span>Zoom interactive audio/video screen sharing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold-400" />
                    <span>WhatsApp direct teacher support: 0349 6663059 / +92 346 1089824</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-gradient-bg text-navy-950 font-bold px-6 py-3 rounded-xl shadow-gold-glow hover:brightness-110 transition text-xs uppercase tracking-wider flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-navy-950" />
                    <span>Claim Demo via WhatsApp</span>
                  </a>

                  <Link
                    to="/about"
                    className="bg-navy-800 hover:bg-navy-750 text-cream-100 border border-gold-500/40 px-5 py-3 rounded-xl transition text-xs font-semibold flex items-center gap-2"
                  >
                    <span>Read Teacher Profile</span>
                    <ArrowRight className="w-4 h-4 text-gold-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-20 bg-navy-950 border-t border-gold-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-gold-400 uppercase bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
              {t('testimonials.tag')}
            </span>
            <h2 className="font-amiri text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 mt-2">
              {t('testimonials.title')}
            </h2>
            <p className="text-xs sm:text-sm text-cream-300 mt-2">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((tItem) => (
              <div
                key={tItem.id}
                className="islamic-card p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-gold-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400" />
                    ))}
                    <span className="text-xs text-cream-300 ml-2 font-bold">5.0 Star</span>
                  </div>

                  <p className="text-xs sm:text-sm text-cream-200 leading-relaxed italic mb-6">
                    "{isUrdu ? tItem.quoteUr : tItem.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gold-500/20">
                  <img
                    src={tItem.avatar}
                    alt={tItem.name}
                    className="w-11 h-11 rounded-full object-cover border border-gold-500/40"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-cream-50">
                      {isUrdu ? tItem.nameUr : tItem.name}
                    </h4>
                    <p className="text-[11px] text-gold-400 font-medium">
                      {isUrdu ? tItem.childUr : tItem.child}
                    </p>
                    <p className="text-[10px] text-cream-300">
                      {isUrdu ? tItem.locationUr : tItem.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION SECTION */}
      <section className="py-20 bg-gradient-to-b from-navy-900 to-navy-950 border-t border-gold-500/30 relative text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 mb-4">
            <IslamicStar className="w-8 h-8 text-gold-400" />
          </div>

          <h2 className="font-amiri text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient-text leading-tight mb-4">
            {t('ctaSection.title')}
          </h2>

          <p className="text-sm sm:text-base text-cream-200 max-w-2xl mx-auto mb-8">
            {t('ctaSection.desc')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink("", "Assalamu Alaikum. I want to enroll my son for 3 Days Free Trial classes.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto gold-gradient-bg text-navy-950 font-bold px-8 py-4 rounded-xl shadow-gold-glow hover:brightness-110 transition flex items-center justify-center gap-2.5 text-sm uppercase tracking-wider"
            >
              <MessageCircle className="w-5 h-5 fill-navy-950" />
              <span>{t('ctaSection.primaryBtn')}</span>
            </a>

            <button
              onClick={() => onOpenTrial()}
              type="button"
              className="w-full sm:w-auto bg-navy-800 hover:bg-navy-700 text-gold-400 border border-gold-500/40 px-7 py-4 rounded-xl transition text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Trial Schedule</span>
            </button>
          </div>

          <p className="text-xs text-gold-400/90 font-medium mt-6">
            ★ {t('ctaSection.boysNotice')}
          </p>
        </div>
      </section>

      {/* Lightbox / Modal for Promotional Poster */}
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
              <span className="text-cream-300">Online Quran Academy Promotional Flyer</span>
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
