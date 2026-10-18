import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Mail, Phone, Clock, ShieldCheck, MapPin, Send, CheckCircle2, Video, Sparkles, HelpCircle } from 'lucide-react';
import { IslamicStar, IslamicDivider, GeometricBackground } from '../components/IslamicPattern';
import { ACADEMY_INFO, COURSES, getWhatsAppLink, getEmailLink } from '../data/academyData';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'United Kingdom',
    course: 'Noorani Qaida',
    timeSlot: 'Evening (After School)',
    message: ''
  });

  const isUrdu = i18n.language === 'ur';

  const handleSubmit = (e) => {
    e.preventDefault();
    const primaryNum = "923496663059";
    const text = `Assalamu Alaikum Maulana Qari Mohammad Fakir,
Inquiry & Registration for Online Quran Academy (For Everyone):

• Student / Parent: ${form.name}
• Email: ${form.email || 'N/A'}
• WhatsApp / Phone: ${form.phone}
• Country / Timezone: ${form.country}
• Interested Course: ${form.course}
• Preferred Class Time: ${form.timeSlot}
• Message / Question: ${form.message || 'I would like to start the 3-day free demo classes.'}

JazakAllah Khair!`;

    const url = `https://wa.me/${primaryNum}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-navy-900 text-cream-100">
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 bg-islamic-pattern border-b border-gold-500/20 text-center">
        <GeometricBackground />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/90 border border-gold-500/40 text-gold-400 text-xs font-semibold mb-4">
            <IslamicStar className="w-4 h-4 text-gold-400" />
            <span>Direct WhatsApp & Email Support</span>
          </div>

          <h1 className="font-amiri text-4xl sm:text-5xl md:text-6xl font-extrabold gold-gradient-text leading-tight mb-4">
            {t('contact.title')}
          </h1>

          <p className="text-sm sm:text-base text-cream-200 max-w-xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-gold-400 uppercase bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                {t('contact.tag')}
              </span>
              <h2 className="font-amiri text-3xl font-bold text-cream-50 mt-2">
                Official Contact Lines
              </h2>
              <p className="text-xs text-cream-300 mt-1">
                Reach Maulana Qari Mohammad Fakir directly without middlemen.
              </p>
            </div>

            {/* WhatsApp Cards */}
            <div className="islamic-card p-5 rounded-2xl space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cream-300">
                    Primary WhatsApp & Direct Calls
                  </h4>
                  <a
                    href="https://wa.me/923496663059"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-emerald-400 hover:text-emerald-300 transition block mt-0.5"
                  >
                    0349 6663059
                  </a>
                  <p className="text-[11px] text-cream-300/80">Available 24/7 for overseas time zones</p>
                </div>
              </div>

              <div className="pt-3 border-t border-gold-500/15 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cream-300">
                    Secondary Helpline & WhatsApp
                  </h4>
                  <a
                    href="https://wa.me/923461089824"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-emerald-400 hover:text-emerald-300 transition block mt-0.5"
                  >
                    +92 346 1089824
                  </a>
                  <p className="text-[11px] text-cream-300/80">Backup direct line for urgent requests</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="islamic-card p-5 rounded-2xl flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cream-300">
                  Official Inquiries Email
                </h4>
                <a
                  href={getEmailLink()}
                  className="text-sm font-semibold text-gold-400 hover:text-gold-300 transition block mt-0.5 break-all"
                >
                  {ACADEMY_INFO.email}
                </a>
                <p className="text-[11px] text-cream-300/80 mt-1">
                  Send questions regarding child registration & schedules.
                </p>
              </div>
            </div>

            {/* Timings & Platform Card */}
            <div className="islamic-card p-5 rounded-2xl space-y-3 text-xs text-cream-300">
              <div className="flex items-center gap-2 text-gold-400 font-bold">
                <Clock className="w-4 h-4" />
                <span>Overseas Time Slots (UK, USA, Canada)</span>
              </div>
              <p className="leading-relaxed">
                Classes run 6 days a week with fully customized time slots according to your son's daily school and weekend routines.
              </p>
              <div className="pt-2 border-t border-gold-500/15 flex items-center gap-2 text-cream-200">
                <Video className="w-4 h-4 text-emerald-400" />
                <span>Classroom Platform: Zoom Live 1-on-1 (Free Zoom app)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Registration & WhatsApp Form */}
          <div className="lg:col-span-7">
            <div className="islamic-card p-6 sm:p-8 rounded-3xl border-2 border-gold-500/40 relative">
              <div className="mb-6">
                <span className="text-[11px] font-bold tracking-widest text-gold-400 uppercase bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                  Quick Registration
                </span>
                <h3 className="font-amiri text-2xl sm:text-3xl font-bold text-cream-50 mt-2">
                  {t('contact.formTitle')}
                </h3>
                <p className="text-xs text-cream-300 mt-1">
                  Fill in the details below to send an instant pre-formatted WhatsApp registration to Maulana Qari Mohammad Fakir.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>{t('contact.successMsg')}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cream-200 font-medium mb-1.5">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mahmood"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-navy-950 border border-gold-500/30 rounded-xl px-3.5 py-2.5 text-cream-100 placeholder-cream-300/40 focus:outline-none focus:border-gold-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-cream-200 font-medium mb-1.5">
                      WhatsApp Number (with country code) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+44 7123 456789"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-navy-950 border border-gold-500/30 rounded-xl px-3.5 py-2.5 text-cream-100 placeholder-cream-300/40 focus:outline-none focus:border-gold-400 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cream-200 font-medium mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="parent@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-navy-950 border border-gold-500/30 rounded-xl px-3.5 py-2.5 text-cream-100 placeholder-cream-300/40 focus:outline-none focus:border-gold-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-cream-200 font-medium mb-1.5">
                      Country of Residence
                    </label>
                    <select
                      value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value })}
                      className="w-full bg-navy-950 border border-gold-500/30 rounded-xl px-3.5 py-2.5 text-cream-100 focus:outline-none focus:border-gold-400 transition"
                    >
                      <option value="United Kingdom">United Kingdom (GMT/BST)</option>
                      <option value="United States (East)">United States (EST - New York/Florida)</option>
                      <option value="United States (Central/West)">United States (CST/PST - Texas/California)</option>
                      <option value="Canada">Canada (Toronto, Vancouver)</option>
                      <option value="Australia">Australia / New Zealand</option>
                      <option value="Europe / Other">Europe / Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cream-200 font-medium mb-1.5">
                      Course Interested In
                    </label>
                    <select
                      value={form.course}
                      onChange={(e) => setForm({ ...form, course: e.target.value })}
                      className="w-full bg-navy-950 border border-gold-500/30 rounded-xl px-3.5 py-2.5 text-cream-100 focus:outline-none focus:border-gold-400 transition"
                    >
                      {COURSES.map((c) => (
                        <option key={c.id} value={c.titleEn}>
                          {c.titleEn} ({c.subtitleEn})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-cream-200 font-medium mb-1.5">
                      Preferred Timing
                    </label>
                    <select
                      value={form.timeSlot}
                      onChange={(e) => setForm({ ...form, timeSlot: e.target.value })}
                      className="w-full bg-navy-950 border border-gold-500/30 rounded-xl px-3.5 py-2.5 text-cream-100 focus:outline-none focus:border-gold-400 transition"
                    >
                      <option value="Evening (After School)">Evening (After School)</option>
                      <option value="Morning (Before School)">Morning (Before School)</option>
                      <option value="Afternoon">Afternoon</option>
                      <option value="Weekend (Saturday & Sunday)">Weekend (Saturday & Sunday)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-cream-200 font-medium mb-1.5">
                    Student's Age, Gender & Background / Specific Questions
                  </label>
                  <textarea
                    rows="3"
                    placeholder="e.g. Seeking classes for my 8-year-old daughter / Myself (adult) / Preferred evening timings..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-navy-950 border border-gold-500/30 rounded-xl px-3.5 py-2.5 text-cream-100 placeholder-cream-300/40 focus:outline-none focus:border-gold-400 transition"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full gold-gradient-bg text-navy-950 font-bold py-3.5 px-4 rounded-xl shadow-gold-glow hover:brightness-110 transition flex items-center justify-center gap-2 text-sm tracking-wide uppercase"
                  >
                    <MessageCircle className="w-5 h-5 fill-navy-950" />
                    <span>{t('contact.submitBtn')}</span>
                  </button>
                </div>

                <p className="text-[11px] text-cream-300/70 text-center">
                  ✦ Submitting opens your WhatsApp directly with this message ready to send to Maulana Qari Mohammad Fakir.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
