import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Scroll, Award, Sparkles, Languages, Compass, HeartHandshake, CheckCircle2, ChevronDown, ChevronUp, MessageCircle, Clock, Calendar, Users } from 'lucide-react';
import { getWhatsAppLink } from '../data/academyData';

const iconMap = {
  BookOpen,
  Scroll,
  Award,
  Sparkles,
  Languages,
  Compass,
  HeartHandshake
};

export default function CourseCard({ course, onSelectTrial }) {
  const { t, i18n } = useTranslation();
  const [showCurriculum, setShowCurriculum] = useState(false);
  const IconComponent = iconMap[course.icon] || BookOpen;

  const isUrdu = i18n.language === 'ur';
  const title = isUrdu ? course.titleUr : course.titleEn;
  const subtitle = isUrdu ? course.subtitleUr : course.subtitleEn;
  const desc = isUrdu ? course.descUr : course.descEn;
  const badge = isUrdu ? course.badgeUr : course.badgeEn;
  const duration = isUrdu ? course.durationUr : course.durationEn;
  const frequency = isUrdu ? course.frequencyUr : course.frequencyEn;
  const level = isUrdu ? course.levelUr : course.levelEn;
  const ageGroup = isUrdu ? course.ageGroupUr : course.ageGroupEn;

  return (
    <div className="islamic-card rounded-2xl overflow-hidden flex flex-col justify-between group">
      {/* Top Image & Badge */}
      <div className="relative h-48 w-full overflow-hidden bg-navy-950">
        <img
          src={course.image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold gold-gradient-bg text-navy-950 shadow-md">
            <Sparkles className="w-3 h-3 fill-navy-950" />
            <span>{badge}</span>
          </span>
        </div>

        {/* Floating Icon */}
        <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-navy-900/90 border border-gold-500/40 flex items-center justify-center text-gold-400 shadow-md backdrop-blur-sm">
          <IconComponent className="w-5 h-5 text-gold-400" />
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="mb-2">
            <span className="text-[11px] text-gold-400 font-semibold tracking-wider uppercase block">
              {subtitle}
            </span>
            <h3 className="font-amiri text-2xl font-bold text-cream-50 group-hover:text-gold-300 transition">
              {title}
            </h3>
          </div>

          <p className="text-xs text-cream-300 leading-relaxed mb-4 line-clamp-3">
            {desc}
          </p>

          {/* Quick Meta Info */}
          <div className="grid grid-cols-2 gap-2 text-[11px] text-cream-300/90 mb-4 bg-navy-950/60 p-2.5 rounded-xl border border-gold-500/15">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span className="truncate">{frequency}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>{ageGroup}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>{level}</span>
            </div>
          </div>

          {/* Expandable Curriculum Preview */}
          <div className="mb-4">
            <button
              onClick={() => setShowCurriculum(!showCurriculum)}
              type="button"
              className="text-xs text-gold-400 hover:text-gold-300 font-semibold flex items-center gap-1 transition"
            >
              <span>{showCurriculum ? 'Hide Syllabus' : 'View Syllabus Outline'}</span>
              {showCurriculum ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {showCurriculum && (
              <ul className="mt-2.5 space-y-1.5 text-xs text-cream-200 bg-navy-950/80 p-3 rounded-lg border border-gold-500/20 animate-fadeIn">
                {course.curriculum.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-gold-500/20 flex items-center gap-2">
          <a
            href={getWhatsAppLink(course.titleEn)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>{t('courses.enrollBtn')}</span>
          </a>

          <button
            onClick={() => onSelectTrial(course.titleEn)}
            type="button"
            className="bg-navy-800 hover:bg-navy-700 text-gold-400 border border-gold-500/40 hover:border-gold-300 font-semibold py-2.5 px-3 rounded-xl text-xs transition"
          >
            3 Days Free
          </button>
        </div>
      </div>
    </div>
  );
}
