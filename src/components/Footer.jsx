import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, Clock, ShieldCheck, Heart, MapPin, Send, MessageCircle, ExternalLink } from 'lucide-react';
import { IslamicStar, IslamicDivider } from './IslamicPattern';
import { ACADEMY_INFO, COURSES, getWhatsAppLink, getEmailLink } from '../data/academyData';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-950 text-cream-200 border-t-2 border-gold-500/30 overflow-hidden">
      {/* Background Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gold-500/5 blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Academy & Teacher Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 p-0.5 shadow-gold-glow flex items-center justify-center">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                  <IslamicStar className="w-6 h-6 text-gold-400" />
                </div>
              </div>
              <div>
                <h3 className="font-amiri text-2xl font-bold gold-gradient-text leading-tight">
                  {i18n.language === 'ur' ? 'آن لائن قرآن اکیڈمی' : 'Online Quran Academy'}
                </h3>
                <p className="text-[11px] text-cream-300 uppercase tracking-widest font-semibold">
                  {t('nav.forEveryone')}
                </p>
              </div>
            </div>

            <p className="text-sm text-cream-300 leading-relaxed">
              {i18n.language === 'ur'
                ? 'مولانا قاری محمد فقیر صاحب کے زیرِ سایہ اوورسیز طلباء و طالبات، خواتین اور ہر عمر کے افراد کے لیے ایک محفوظ، روحانی اور معیاری قرآنی ادارہ۔'
                : 'A dedicated virtual sanctuary providing authentic Quranic education for everyone — kids, girls, boys, women, men, and elders — under the guidance of Maulana Qari Mohammad Fakir.'}
            </p>

            <div className="pt-2 border-t border-gold-500/20">
              <p className="text-xs text-gold-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>Instructor: Maulana Qari Mohammad Fakir</span>
              </p>
              <p className="text-xs text-cream-300 mt-0.5">8+ Years Teaching Overseas Students</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-amiri text-lg font-bold text-gold-400 tracking-wide border-b border-gold-500/20 pb-2 flex items-center gap-2">
              <IslamicStar className="w-4 h-4 text-gold-500" />
              <span>{t('footer.quickLinks')}</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-cream-300 hover:text-gold-400 transition flex items-center gap-1.5">
                  <span className="text-gold-500 text-xs">✦</span>
                  <span>{t('nav.home')}</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-cream-300 hover:text-gold-400 transition flex items-center gap-1.5">
                  <span className="text-gold-500 text-xs">✦</span>
                  <span>{t('nav.courses')}</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream-300 hover:text-gold-400 transition flex items-center gap-1.5">
                  <span className="text-gold-500 text-xs">✦</span>
                  <span>{t('nav.about')}</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream-300 hover:text-gold-400 transition flex items-center gap-1.5">
                  <span className="text-gold-500 text-xs">✦</span>
                  <span>{t('nav.contact')}</span>
                </Link>
              </li>
            </ul>

            <div className="mt-4 p-3 rounded-lg bg-navy-900 border border-gold-500/20 text-xs text-cream-300">
              <span className="text-gold-400 font-semibold block mb-1">Target Audience:</span>
              <span>For Everyone • Kids, Girls, Boys, Women, Men & Elders (UK, USA, Canada & Worldwide).</span>
            </div>
          </div>

          {/* Column 3: Featured Courses */}
          <div className="space-y-3">
            <h4 className="font-amiri text-lg font-bold text-gold-400 tracking-wide border-b border-gold-500/20 pb-2 flex items-center gap-2">
              <IslamicStar className="w-4 h-4 text-gold-500" />
              <span>{t('footer.coursesTitle')}</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-cream-300">
              {COURSES.map((course) => (
                <li key={course.id}>
                  <Link
                    to="/courses"
                    className="hover:text-gold-400 transition flex items-center justify-between py-1 border-b border-navy-850"
                  >
                    <span>{i18n.language === 'ur' ? course.titleUr : course.titleEn}</span>
                    <span className="text-[10px] text-gold-400/80 bg-navy-900 px-1.5 py-0.5 rounded border border-gold-500/20">
                      {i18n.language === 'ur' ? course.badgeUr : course.badgeEn}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div className="space-y-3">
            <h4 className="font-amiri text-lg font-bold text-gold-400 tracking-wide border-b border-gold-500/20 pb-2 flex items-center gap-2">
              <IslamicStar className="w-4 h-4 text-gold-500" />
              <span>{t('footer.contactTitle')}</span>
            </h4>

            <div className="space-y-3 text-xs text-cream-300">
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-cream-200">WhatsApp / Call:</span>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition font-medium block"
                  >
                    0349 6663059
                  </a>
                  <a
                    href="https://wa.me/923461089824"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition font-medium block"
                  >
                    +92 346 1089824
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-cream-200">Email Address:</span>
                  <a
                    href={getEmailLink()}
                    className="text-cream-300 hover:text-gold-400 transition break-all"
                  >
                    {ACADEMY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-cream-200">Class Timings:</span>
                  <span>Flexible (GMT, EST, PST & Local Time Zones)</span>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 px-3 rounded-lg text-xs shadow-md transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp Message</span>
            </a>
          </div>
        </div>

        {/* Islamic Divider */}
        <IslamicDivider label={i18n.language === 'ur' ? 'چھوٹے قدم • بڑی تبدیلیاں • ایک روشن مستقبل' : 'Small Steps • Big Changes • A Brighter Future'} />

        {/* Bottom Rights Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-cream-300/80 gap-3 pt-2">
          <p>
            © {currentYear} <span className="text-gold-400 font-semibold">{ACADEMY_INFO.name}</span>. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-2 text-[11px]">
            <span className="bg-navy-900 border border-gold-500/30 px-2 py-0.5 rounded text-gold-400">
              Open for Everyone
            </span>
            <span>•</span>
            <span>Kids, Women & Men • UK, USA, Canada</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
