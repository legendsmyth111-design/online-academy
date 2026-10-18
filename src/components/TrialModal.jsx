import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Sparkles, CheckCircle2, MessageCircle, Clock, ShieldCheck, User, Globe, Phone, BookOpen, Users } from 'lucide-react';
import { IslamicStar } from './IslamicPattern';
import { COURSES, ACADEMY_INFO } from '../data/academyData';

export default function TrialModal({ isOpen, onClose, preselectedCourse = "" }) {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    studentName: '',
    studentAge: '',
    learnerCategory: 'Kid (Boy or Girl)',
    whatsapp: '',
    country: 'United Kingdom',
    course: preselectedCourse || 'Noorani Qaida',
    timeSlot: 'Evening (After School/Work)',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const primaryNum = "923496663059";
    const text = `Assalamu Alaikum Maulana Qari Mohammad Fakir,
I would like to register for the 3 Days FREE Demo Classes at Online Quran Academy:

• Student / Parent Name: ${formData.studentName || 'Student'}
• Category: ${formData.learnerCategory}
• Student Age: ${formData.studentAge || 'N/A'}
• Country / Timezone: ${formData.country}
• WhatsApp: ${formData.whatsapp}
• Interested Course: ${formData.course}
• Preferred Timing: ${formData.timeSlot}
• Note: ${formData.notes || 'Looking forward to scheduling the first trial session.'}

JazakAllah Khair!`;

    const url = `https://wa.me/${primaryNum}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-navy-900 border border-gold-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-navy-950/80 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 p-2 text-cream-300 hover:text-gold-400 rounded-full hover:bg-navy-800 transition"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 mb-3">
            <IslamicStar className="w-7 h-7 text-gold-400" />
          </div>
          <span className="inline-block text-[11px] font-bold tracking-widest text-gold-400 uppercase bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20 mb-2">
            ★ 3 Days FREE Demo Classes • No Commitment
          </span>
          <h3 className="font-amiri text-2xl sm:text-3xl font-bold gold-gradient-text">
            {i18n.language === 'ur' ? '3 روزہ مفت ٹرائل حاصل کریں' : 'Claim Your 3-Day Free Trial'}
          </h3>
          <p className="text-xs text-cream-300 mt-1 max-w-sm mx-auto">
            {i18n.language === 'ur'
              ? 'ہر عمر کے لیے: بچے، بچیاں، خواتین، مرد اور بزرگ۔ زوم پر ون ٹو ون کلاسز۔'
              : 'One-on-one live interactive Zoom classes for everyone — kids, girls, boys, women, men, and elders.'}
          </p>
        </div>

        {/* Guarantee Pills */}
        <div className="grid grid-cols-3 gap-2 mb-6 text-center">
          <div className="bg-navy-850 border border-gold-500/15 p-2 rounded-lg">
            <span className="block text-gold-400 font-bold text-xs">100% Free</span>
            <span className="text-[10px] text-cream-300">3 Days Trial</span>
          </div>
          <div className="bg-navy-850 border border-gold-500/15 p-2 rounded-lg">
            <span className="block text-gold-400 font-bold text-xs">For Everyone</span>
            <span className="text-[10px] text-cream-300">Kids, Women & Men</span>
          </div>
          <div className="bg-navy-850 border border-gold-500/15 p-2 rounded-lg">
            <span className="block text-gold-400 font-bold text-xs">Zoom 1-to-1</span>
            <span className="text-[10px] text-cream-300">UK/USA/Canada</span>
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-cream-200 font-medium mb-1">
                Student / Parent Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Tariq Mahmood"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                className="w-full bg-navy-950 border border-gold-500/30 rounded-lg px-3 py-2 text-cream-100 placeholder-cream-300/40 focus:outline-none focus:border-gold-400"
              />
            </div>

            <div>
              <label className="block text-cream-200 font-medium mb-1">
                Learner Category *
              </label>
              <select
                value={formData.learnerCategory}
                onChange={(e) => setFormData({ ...formData, learnerCategory: e.target.value })}
                className="w-full bg-navy-950 border border-gold-500/30 rounded-lg px-3 py-2 text-cream-100 focus:outline-none focus:border-gold-400"
              >
                <option value="Kid Boy">Young Boy (Kid)</option>
                <option value="Kid Girl">Young Girl (Kid)</option>
                <option value="Sister / Woman">Sister / Adult Female</option>
                <option value="Brother / Male">Brother / Adult Male</option>
                <option value="Elder Student">Elder / Senior Learner</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-cream-200 font-medium mb-1">
                Age (Approx) *
              </label>
              <input
                type="number"
                min="4"
                max="90"
                required
                placeholder="e.g. 9 years, 25 years"
                value={formData.studentAge}
                onChange={(e) => setFormData({ ...formData, studentAge: e.target.value })}
                className="w-full bg-navy-950 border border-gold-500/30 rounded-lg px-3 py-2 text-cream-100 placeholder-cream-300/40 focus:outline-none focus:border-gold-400"
              />
            </div>

            <div>
              <label className="block text-cream-200 font-medium mb-1">
                WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+44 7123 456789"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full bg-navy-950 border border-gold-500/30 rounded-lg px-3 py-2 text-cream-100 placeholder-cream-300/40 focus:outline-none focus:border-gold-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-cream-200 font-medium mb-1">
                Country of Residence
              </label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full bg-navy-950 border border-gold-500/30 rounded-lg px-3 py-2 text-cream-100 focus:outline-none focus:border-gold-400"
              >
                <option value="United Kingdom">United Kingdom (GMT)</option>
                <option value="United States">United States (EST/CST/PST)</option>
                <option value="Canada">Canada (EST/PST)</option>
                <option value="Australia">Australia</option>
                <option value="Europe / Other">Europe / Other</option>
              </select>
            </div>

            <div>
              <label className="block text-cream-200 font-medium mb-1">
                Select Course
              </label>
              <select
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="w-full bg-navy-950 border border-gold-500/30 rounded-lg px-3 py-2 text-cream-100 focus:outline-none focus:border-gold-400"
              >
                {COURSES.map((c) => (
                  <option key={c.id} value={c.titleEn}>
                    {c.titleEn}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-cream-200 font-medium mb-1">
              Preferred Time Slot
            </label>
            <select
              value={formData.timeSlot}
              onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
              className="w-full bg-navy-950 border border-gold-500/30 rounded-lg px-3 py-2 text-cream-100 focus:outline-none focus:border-gold-400"
            >
              <option value="Morning (Before School/Work)">Morning (Before School/Work)</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening (After School/Work)">Evening (After School/Work)</option>
              <option value="Weekend Special">Weekend Special (Sat & Sun)</option>
            </select>
          </div>

          <div>
            <label className="block text-cream-200 font-medium mb-1">
              Notes or Questions (Optional)
            </label>
            <textarea
              rows="2"
              placeholder="Any previous Quran knowledge or specific requirements..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-navy-950 border border-gold-500/30 rounded-lg px-3 py-2 text-cream-100 placeholder-cream-300/40 focus:outline-none focus:border-gold-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full gold-gradient-bg text-navy-950 font-bold py-3 px-4 rounded-xl shadow-gold-glow hover:brightness-110 transition flex items-center justify-center gap-2 text-sm tracking-wide mt-2"
          >
            <MessageCircle className="w-5 h-5 fill-navy-950" />
            <span>Send Registration via WhatsApp</span>
          </button>
        </form>

        <p className="text-[11px] text-cream-300/60 text-center mt-3">
          🔒 Direct connection with Maulana Qari Mohammad Fakir. No spam guaranteed.
        </p>
      </div>
    </div>
  );
}
