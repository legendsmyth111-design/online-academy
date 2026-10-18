import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, CheckCircle, Sparkles, MessageCircle, Clock, Calendar, Users, HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Video } from 'lucide-react';
import { IslamicStar, IslamicDivider, GeometricBackground } from '../components/IslamicPattern';
import CourseCard from '../components/CourseCard';
import { COURSES, getWhatsAppLink } from '../data/academyData';

export default function Courses({ onOpenTrial }) {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');
  const [openFaq, setOpenFaq] = useState(null);

  const isUrdu = i18n.language === 'ur';

  const filterCourses = () => {
    if (activeTab === 'recitation') {
      return COURSES.filter((c) => ['noorani-qaida', 'nazra-quran'].includes(c.id));
    }
    if (activeTab === 'tajweed-hifz') {
      return COURSES.filter((c) => ['hifz-ul-quran', 'tajweed-rules'].includes(c.id));
    }
    if (activeTab === 'islamic-studies') {
      return COURSES.filter((c) => ['tarjuma-e-quran', 'namaz-lesson', 'masnoon-duain'].includes(c.id));
    }
    return COURSES;
  };

  const faqs = [
    {
      q: "How does the 3 Days FREE Demo Trial work?",
      qUr: "3 دن کی مفت آزمائشی کلاسز کا طریقہ کار کیا ہے؟",
      a: "You simply book a trial using WhatsApp or the form on our site. Maulana Qari Mohammad Fakir will arrange a convenient time for you on Zoom. You or your child will attend 3 full one-on-one sessions without paying anything. You only decide to continue if you are 100% satisfied.",
      aUr: "آپ واٹس ایپ یا فارم کے ذریعے رابطہ کریں۔ مولانا قاری صاحب آپ کی پسند کے وقت پر زوم کا لنک بھیجیں گے۔ آپ یا آپ کا بچہ 3 دن مکمل کلاسز لیں گے۔ اگر آپ مطمئن ہوں تو داخلہ جاری رکھیں۔"
    },
    {
      q: "Are the classes group or individual one-on-one?",
      qUr: "کیا کلاسز اجتماعی ہوتی ہیں یا انفرادی (ون ٹو ون)؟",
      a: "All classes are strictly 100% one-on-one. The teacher gives undivided attention to each student, ensuring correct Makharij, patient guidance, and immediate error correction.",
      aUr: "ہماری تمام کلاسز 100% انفرادی (ون ٹو ون) ہوتی ہیں۔ استاد کی مکمل توجہ صرف آپ کے تلفظ، تجوید اور سبق پر ہوتی ہے۔"
    },
    {
      q: "What equipment or software is required?",
      qUr: "کلاس لینے کے لیے کن آلات یا سافٹ ویئر کی ضرورت ہے؟",
      a: "A laptop, tablet (iPad), or smartphone with an active internet connection and the free Zoom app. The teacher shares high-definition digital Quran and Qaida on screen.",
      aUr: "انٹرنیٹ کنکشن کے ساتھ کوئی بھی اسمارٹ فون، ٹیبلٹ یا لیپ ٹاپ اور مفت زوم (Zoom) ایپ درکار ہے۔"
    },
    {
      q: "Are class timings suitable for the UK, USA, and Canada?",
      qUr: "کیا کلاسز کے اوقات برطانیہ، امریکہ اور کینیڈا کے لیے مناسب ہیں؟",
      a: "Yes! Since Maulana Qari Mohammad Fakir specializes in overseas students, class slots are available early morning before school/work, afternoon, evening after school, and weekends across GMT, EST, CST, and PST time zones.",
      aUr: "جی ہاں! مولانا صاحب خصوصی طور پر اوورسیز طلباء کو پڑھاتے ہیں۔ اسکول یا کام سے پہلے، شام کو یا ویک اینڈ پر آپ کے مقامی وقت کے مطابق کلاسز دستیاب ہیں۔"
    },
    {
      q: "Who can enroll in the academy courses?",
      qUr: "اکیڈمی کے کورسز میں کون داخلہ لے سکتا ہے؟",
      a: "Our academy warmly welcomes everyone — young children (boys and girls), adult sisters, working brothers, and elderly learners. Lessons are tailored to each individual's age and pace.",
      aUr: "ہماری اکیڈمی میں سب خوش آمدید ہیں — چھوٹے بچے اور بچیاں، خواتین، مرد حضرات اور بزرگ۔ ہر طالب علم کے لیے انفرادی اور شائستہ ماحول میں کلاسز دی جاتی ہیں۔"
    }
  ];

  return (
    <div className="min-h-screen bg-navy-900 text-cream-100">
      {/* Page Header Banner */}
      <section className="relative py-16 md:py-24 bg-islamic-pattern border-b border-gold-500/20 text-center">
        <GeometricBackground />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/90 border border-gold-500/40 text-gold-400 text-xs font-semibold mb-4">
            <IslamicStar className="w-4 h-4 text-gold-400" />
            <span>Comprehensive Curriculum For Kids, Women & Men</span>
          </div>

          <h1 className="font-amiri text-4xl sm:text-5xl md:text-6xl font-extrabold gold-gradient-text leading-tight mb-4">
            {t('courses.title')}
          </h1>

          <p className="text-sm sm:text-base text-cream-200 max-w-2xl mx-auto leading-relaxed">
            {t('courses.subtitle')}
          </p>

          {/* Guarantee Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6 text-xs text-cream-300">
            <span className="bg-navy-850 px-3.5 py-1.5 rounded-lg border border-gold-500/20">
              ✦ 1-to-1 Live Zoom Sessions
            </span>
            <span className="bg-navy-850 px-3.5 py-1.5 rounded-lg border border-gold-500/20">
              ✦ Flexible UK, USA, Canada Schedules
            </span>
            <span className="bg-navy-850 px-3.5 py-1.5 rounded-lg border border-gold-500/20">
              ✦ 3 Days FREE Demo Classes
            </span>
          </div>
        </div>
      </section>

      {/* Courses Grid & Filters */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
              activeTab === 'all'
                ? 'gold-gradient-bg text-navy-950 shadow-gold-glow'
                : 'bg-navy-850 text-cream-300 hover:text-gold-400 border border-gold-500/20'
            }`}
          >
            All 7 Programs
          </button>
          <button
            onClick={() => setActiveTab('recitation')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
              activeTab === 'recitation'
                ? 'gold-gradient-bg text-navy-950 shadow-gold-glow'
                : 'bg-navy-850 text-cream-300 hover:text-gold-400 border border-gold-500/20'
            }`}
          >
            Qaida & Recitation
          </button>
          <button
            onClick={() => setActiveTab('tajweed-hifz')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
              activeTab === 'tajweed-hifz'
                ? 'gold-gradient-bg text-navy-950 shadow-gold-glow'
                : 'bg-navy-850 text-cream-300 hover:text-gold-400 border border-gold-500/20'
            }`}
          >
            Hifz & Tajweed
          </button>
          <button
            onClick={() => setActiveTab('islamic-studies')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
              activeTab === 'islamic-studies'
                ? 'gold-gradient-bg text-navy-950 shadow-gold-glow'
                : 'bg-navy-850 text-cream-300 hover:text-gold-400 border border-gold-500/20'
            }`}
          >
            Namaz, Translation & Duas
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterCourses().map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelectTrial={(courseName) => onOpenTrial(courseName)}
            />
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-navy-950 border-t border-gold-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-gold-400 uppercase bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
              Clear Answers
            </span>
            <h2 className="font-amiri text-3xl sm:text-4xl font-bold text-cream-50 mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-cream-300 mt-2">
              Everything you need to know about starting Quran lessons for your son.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-navy-900 border border-gold-500/20 rounded-xl overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    type="button"
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-cream-100 hover:text-gold-400 transition"
                  >
                    <span>{isUrdu ? faq.qUr : faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gold-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gold-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-cream-300 leading-relaxed border-t border-gold-500/10 pt-3 animate-fadeIn">
                      {isUrdu ? faq.aUr : faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-amiri text-xl font-bold text-gold-400">
                Have a unique question or schedule request?
              </h4>
              <p className="text-xs text-cream-300 mt-1">
                Reach out directly to Maulana Qari Mohammad Fakir on WhatsApp.
              </p>
            </div>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient-bg text-navy-950 font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-gold-glow hover:brightness-110 transition shrink-0 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-navy-950" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
