export const ACADEMY_INFO = {
  name: "Online Quran Academy",
  tagline: "Learn | Recite | Live Quran",
  subTagline: "Small Steps | Big Changes | A Brighter Future",
  targetAudience: "For Everyone: Kids, Boys, Girls, Women & Elders • Overseas Students (UK, USA, Canada)",
  teacher: {
    name: "Maulana Qari Mohammad Fakir",
    experience: "8+ Years of Teaching Experience",
    role: "Senior Quran Scholar & Certified Qari",
    image: "./assets/teacher.jpg",
  },
  poster: "./assets/poster.jpg",
  whatsappNumbers: [
    { display: "0349 6663059", raw: "+923496663059", clean: "923496663059" },
    { display: "+92 346 1089824", raw: "+923461089824", clean: "923461089824" }
  ],
  email: "muhammadfaqir5544332@gmail.com",
  freeTrialDays: 3,
  platform: "Zoom & Skype 1-on-1",
  stats: [
    { labelEn: "Students Enrolled", labelUr: "طلباء و طالبات", value: "500+" },
    { labelEn: "Years Experience", labelUr: "سالہ تدریسی تجربہ", value: "8+" },
    { labelEn: "Countries Reached", labelUr: "ممالک میں اوورسیز طلباء", value: "15+" },
    { labelEn: "Satisfaction Rating", labelUr: "کامیابی کا تناسب", value: "100%" }
  ]
};

export const COURSES = [
  {
    id: "noorani-qaida",
    titleEn: "Noorani Qaida",
    titleUr: "نورانی قاعدہ",
    subtitleEn: "Foundation & Arabic Phonetics",
    subtitleUr: "بنیادی تلفظ اور درست مخارج",
    descEn: "Designed for all beginners — kids, girls, boys, women, and adults — to master Arabic alphabets, proper articulation points (Makharij), Harakaat, Tanween, Madd, and joining letters correctly.",
    descUr: "تمام ابتدائی طلباء و طالبات، بچوں، خواتین اور بڑوں کے لیے عربی حروف، درست مخارج، حرکات، تنوین، مد اور حروف کی باہمی ترکیب سیکھنے کا منظم اور آسان کورس۔",
    durationEn: "3 to 6 Months",
    durationUr: "3 سے 6 ماہ",
    frequencyEn: "3 - 5 Days/Week (30 mins)",
    frequencyUr: "ہفتے میں 3 تا 5 دن (30 منٹ)",
    levelEn: "Beginner",
    levelUr: "ابتدائی مرحلہ",
    ageGroupEn: "Ages 4+ (Kids, Teens & Adults)",
    ageGroupUr: "4 سال اور زائد (بچے، خواتین اور مرد حضرات)",
    icon: "BookOpen",
    badgeEn: "Foundation",
    badgeUr: "بنیادی کورس",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80",
    curriculum: [
      "Arabic Alphabet Recognition & Individual Pronunciation",
      "Compound Letters (Murakkabaat) & Shapes",
      "Short Vowels (Harakat: Fathah, Kasrah, Dammah)",
      "Tanween, Sukoon, and Jazm Rules",
      "Letters of Madd (Elongation) & Leen",
      "Tashdeed (Shaddah) & Practice Exercises"
    ]
  },
  {
    id: "nazra-quran",
    titleEn: "Nazra Quran",
    titleUr: "ناظرہ قرآن",
    subtitleEn: "Fluent & Melodious Recitation",
    subtitleUr: "روانی اور ترتیل کے ساتھ تلاوت",
    descEn: "Smooth and fluent recitation of the complete 30 Paras of the Holy Quran with correct pauses (Waqf), rhythmic fluency, and utmost reverence for all age groups.",
    descUr: "قرآنِ کریم کے تمام 30 پاروں کو دیکھ کر روانی، صحتِ لفظی، بنیادی تجوید اور رموزِ اوقاف کی مکمل رعایت کے ساتھ پڑھنا (ہر عمر کے لیے)۔",
    durationEn: "12 to 18 Months",
    durationUr: "12 سے 18 ماہ",
    frequencyEn: "4 - 5 Days/Week (30-40 mins)",
    frequencyUr: "ہفتے میں 4 تا 5 دن (30-40 منٹ)",
    levelEn: "Intermediate",
    levelUr: "متوسط مرحلہ",
    ageGroupEn: "Ages 6+ (Kids, Girls, Boys, Adults)",
    ageGroupUr: "6 سال اور زائد (بچے، بچیاں، مرد و خواتین)",
    icon: "Scroll",
    badgeEn: "Most Popular",
    badgeUr: "مقبول ترین",
    image: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&w=800&q=80",
    curriculum: [
      "Fluent Recitation of 30 Paras (Juz 1 to 30)",
      "Rules of Waqf (Stopping & Breathing during Recitation)",
      "Correct Pronunciation of Heavy and Light Letters",
      "Connecting Verses without Breaking Context",
      "Melodious Voice Modulation & Sunnah Ettiquette",
      "Regular Revision to ensure Continuous Fluency"
    ]
  },
  {
    id: "hifz-ul-quran",
    titleEn: "Hifz-ul-Quran",
    titleUr: "حفظ القرآن",
    subtitleEn: "Complete or Selected Surah Memorization",
    subtitleUr: "قرآن پاک کا باقاعدہ حفظ",
    descEn: "A structured, personalized program for memorizing either the full Quran or designated Surahs (like Surah Yaseen, Al-Mulk, Al-Kahf) tailored for children and adults alike.",
    descUr: "روزانہ نیا سبق، سبقی (حالیہ یاد کردہ پارہ) اور منزل (پچھلی تلاوت) کے منظم طریقے سے مکمل قرآن یا مخصوص سورتوں کا پختہ حفظ۔",
    durationEn: "2 to 3 Years (Flexible)",
    durationUr: "2 تا 3 سال (حسبِ صلاحیت)",
    frequencyEn: "5 - 6 Days/Week (45-60 mins)",
    frequencyUr: "ہفتے میں 5 تا 6 دن (45-60 منٹ)",
    levelEn: "Advanced",
    levelUr: "اعلیٰ مرحلہ",
    ageGroupEn: "Ages 7+ (Children & Adults)",
    ageGroupUr: "7 سال اور زائد (تمام عمر کے افراد)",
    icon: "Award",
    badgeEn: "Prestigious",
    badgeUr: "اعزاز",
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=800&q=80",
    curriculum: [
      "Daily Sabaq (New Memorization portion)",
      "Sabqi (Recent Memorization Revision)",
      "Manzil / Daur (Cumulative Revision of All Memorized Paras)",
      "Memorization Techniques for Overseas School Children",
      "Tajweed Perfection while Memorizing",
      "Weekly & Monthly Progress Evaluation"
    ]
  },
  {
    id: "tajweed-rules",
    titleEn: "Tajweed Rules",
    titleUr: "تجوید القرآن",
    subtitleEn: "Precision & Pronunciation Rules",
    subtitleUr: "مخارج اور تجوید کے مستند قواعد",
    descEn: "Master the exact acoustic characteristics and theoretical principles of Tajweed to recite the Holy Quran beautifully and correctly, open to male and female students of all ages.",
    descUr: "غنہ، اخفاء، ادغام، اظہار، قلقلہ، صفاتِ حروف اور تفخیم و ترقیق کے اصول و ضوابط کی عملی اور علمی مشق (ہر عمر کے لیے)۔",
    durationEn: "4 to 6 Months",
    durationUr: "4 سے 6 ماہ",
    frequencyEn: "3 Days/Week (30 mins)",
    frequencyUr: "ہفتے میں 3 دن (30 منٹ)",
    levelEn: "All Levels",
    levelUr: "تمام درجات",
    ageGroupEn: "All Ages (Kids, Youth, Adults & Elders)",
    ageGroupUr: "ہر عمر کے لیے (بچے، خواتین، مرد اور بزرگ)",
    icon: "Sparkles",
    badgeEn: "Essential",
    badgeUr: "لازمی کورس",
    image: "https://images.unsplash.com/photo-1597935258735-e254c1839512?auto=format&fit=crop&w=800&q=80",
    curriculum: [
      "Makharij-ul-Huroof (17 Articulation Points)",
      "Sifaat-e-Lazimah & Aridah (Attributes of Letters)",
      "Rules of Noon Saakin & Tanween (Izhar, Idgham, Iqlab, Ikhfa)",
      "Rules of Meem Saakin & Rules of Laam and Raa",
      "Types of Madd (Madd Muttasil, Munfasil, Lazim, Aaridh)",
      "Qalqalah (Echo Sound) Precision in Practice"
    ]
  },
  {
    id: "tarjuma-e-quran",
    titleEn: "Tarjuma-e-Quran",
    titleUr: "ترجمہ قرآن",
    subtitleEn: "Translation & Meaning Comprehension",
    subtitleUr: "لفظ بہ لفظ ترجمہ و فہمِ قرآن",
    descEn: "Understand the divine message through clear word-by-word translation, contextual revelation (Asbab al-Nuzul), and core moral lessons applicable to everyday life.",
    descUr: "قرآنی آیات کا سلیس اور آسان ترجمہ، شانِ نزول اور روزمرہ زندگی کے لیے رہنمائی تاکہ تلاوت کے دوران فہم حاصل ہو۔",
    durationEn: "6 to 12 Months",
    durationUr: "6 سے 12 ماہ",
    frequencyEn: "2 - 3 Days/Week (40 mins)",
    frequencyUr: "ہفتے میں 2 تا 3 دن (40 منٹ)",
    levelEn: "Intermediate to Advanced",
    levelUr: "متوسط تا اعلیٰ",
    ageGroupEn: "Ages 10+ to Adults & Elders",
    ageGroupUr: "10 سال سے لے کر تمام عمر کے افراد کے لیے",
    icon: "Languages",
    badgeEn: "Deep Wisdom",
    badgeUr: "فہم و حکمت",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
    curriculum: [
      "Word-by-Word Vocabulary Building",
      "Grammatical Structure of Common Quranic Words",
      "Historical Background & Asbab al-Nuzul",
      "Practical Reflections (Tadabbur) for Daily Life",
      "Summary of Every Surah & Key Divine Commandments",
      "Interactive Q&A to Clear Concepts"
    ]
  },
  {
    id: "namaz-lesson",
    titleEn: "Namaz Lesson (Salah)",
    titleUr: "نماز کی تعلیم (مسائل و ارکان)",
    subtitleEn: "Complete Practical Prayer & Purification",
    subtitleUr: "وضو، فرائض، سنن اور عملی طریقہ",
    descEn: "Comprehensive practical guidance on how to perform Salah according to Sunnah. Includes Wudu, Raka'at breakdown, Tashahhud, Durood-e-Ibrahim, and Dua-e-Qunoot for children, new Muslims, women, and adults.",
    descUr: "وضو کا مکمل مسنون طریقہ، پانچوں نمازوں کے فرائض و سنن، تشہد، درودِ ابراہیمی، دعائے قنوت اور سجدہ سہو کے احکام۔",
    durationEn: "1 to 2 Months",
    durationUr: "1 سے 2 ماہ",
    frequencyEn: "2 - 3 Days/Week (30 mins)",
    frequencyUr: "ہفتے میں 2 تا 3 دن (30 منٹ)",
    levelEn: "All Beginners",
    levelUr: "تمام ابتدائی طلباء",
    ageGroupEn: "Ages 5+ to Adults (Everyone)",
    ageGroupUr: "5 سال سے لے کر تمام عمر کے افراد",
    icon: "Compass",
    badgeEn: "Obligatory",
    badgeUr: "فرضِ عین",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
    curriculum: [
      "Purification: Sunnah Method of Wudu & Ghusl",
      "Adhan & Iqamah Meaning and Etiquette",
      "Conditions & Pillars (Faraidh & Wajibaat) of Salah",
      "Memorization: Sana, Tashahhud, Durood & Duas",
      "Dua-e-Qunoot with Tajweed for Witr Prayer",
      "Common Mistakes in Ruku, Sujood & Correction"
    ]
  },
  {
    id: "masnoon-duain",
    titleEn: "Masnoon Duain",
    titleUr: "مسنون دعائیں",
    subtitleEn: "Daily Sunnah Supplications & Adhkar",
    subtitleUr: "صبح و شام کی سنن اور روزمرہ دعائیں",
    descEn: "Learn daily Sunnah prayers for protection, blessings, and peace of heart: morning/evening Adhkar, eating, sleeping, traveling, and 40 Rabbana Quranic supplications for the whole family.",
    descUr: "کھانے، پینے، سونے، جاگنے، بیت الخلاء جانے اور سفر کی مسنون دعائیں مع صبح و شام کے اذکار اور چالیس قرآنی دعائیں (40 ربنا)۔",
    durationEn: "2 to 3 Months",
    durationUr: "2 سے 3 ماہ",
    frequencyEn: "2 Days/Week (30 mins)",
    frequencyUr: "ہفتے میں 2 دن (30 منٹ)",
    levelEn: "All Ages",
    levelUr: "ہر عمر کے لیے",
    ageGroupEn: "All Ages (Kids, Youth, Adults & Elders)",
    ageGroupUr: "ہر عمر کے لیے (بچے، خواتین، مرد اور بزرگ)",
    icon: "HeartHandshake",
    badgeEn: "Sunnah Lifestyle",
    badgeUr: "سنتِ نبوی",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80",
    curriculum: [
      "Daily Morning and Evening Sunnah Adhkar",
      "Duas for Eating, Sleeping, Waking & Leaving Home",
      "Duas for Entering & Leaving Masjid",
      "Travel Supplication (Safar ki Dua)",
      "Protection from Evil Eye & Sickness (Ruqyah basics)",
      "Selected 40 Rabbana Duas from the Holy Quran"
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Brother Tariq Mahmood",
    nameUr: "برادر طارق محمود",
    location: "London, United Kingdom",
    locationUr: "لندن، برطانیہ (UK)",
    child: "Father of Rayan & Fatima",
    childUr: "والدِ ریان و فاطمہ",
    course: "Noorani Qaida & Nazra",
    rating: 5,
    quote: "Finding a reliable, punctual, and patient Quran teacher in London was tough with busy school hours. Maulana Qari Fakir has been phenomenal! Both my son and daughter are learning with great interest and proper Makharij.",
    quoteUr: "لندن میں مصروف اسکول کے ساتھ ایک بااعتماد اور صابر استاد کا ملنا مشکل تھا۔ مولانا قاری فقیر صاحب نے میرے بیٹے اور بیٹی دونوں کو اتنی عمدگی سے پڑھایا کہ اب وہ خود شوق سے روزانہ پڑھتے ہیں۔",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Sister Aisha & Dr. Imran Khan",
    nameUr: "سسٹر عائشہ و ڈاکٹر عمران خان",
    location: "Dallas, Texas (USA)",
    locationUr: "ڈیلاس، ٹیکساس (USA)",
    child: "Family Classes (Kids & Mother)",
    childUr: "فیملی کلاسز (بچے اور والدہ)",
    course: "Hifz-ul-Quran & Tajweed",
    rating: 5,
    quote: "The time zone flexibility for the USA is incredible. The Zoom setup is professional, and the one-on-one attention keeps the lessons completely focused. We are so grateful for the 3-day free trial that convinced us immediately.",
    quoteUr: "امریکہ کے ٹائم زون کے مطابق کلاسز کا وقت ملنا بہت بڑی نعمت ہے۔ انفرادی توجہ کی وجہ سے سبق پر مکمل یکسوئی رہتی ہے۔ 3 دن کے مفت ٹرائل نے ہمیں فوری مطمئن کر دیا تھا۔",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Sister Samina & Brother Farhan",
    nameUr: "سسٹر ثمینہ و برادر فرحان",
    location: "Toronto, Ontario (Canada)",
    locationUr: "ٹورنٹو، اونٹاریو (Canada)",
    child: "Parents of Zaid (Age 8) & Maryam (Age 12)",
    childUr: "والدینِ زید و مریم",
    course: "Nazra & Namaz Lesson",
    rating: 5,
    quote: "Maulana Qari Mohammad Fakir not only teaches fluent recitation but also teaches Namaz and daily Masnoon Duas with practical demonstrations. The patience he shows is extraordinary. Highly recommended for all families overseas!",
    quoteUr: "مولانا قاری محمد فقیر صاحب تلاوت کے ساتھ نماز اور مسنون دعائیں بھی عملی طور پر سکھاتے ہیں۔ ان کا صبر اور اخلاق لاجواب ہے۔ بیرون ملک کے تمام خاندانوں کے لیے بہترین انتخاب ہے۔",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
  }
];

export function getWhatsAppLink(courseName = "", customMessage = "") {
  const number = "923496663059";
  let text = "Assalamu Alaikum Maulana Qari Mohammad Fakir. I would like to register for the 3 Days FREE Demo Classes at Online Quran Academy.";
  if (courseName) {
    text += ` Interested Course: ${courseName}.`;
  }
  if (customMessage) {
    text += ` Note: ${customMessage}`;
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppSecondaryLink() {
  const number = "923461089824";
  const text = "Assalamu Alaikum. I am contacting Online Quran Academy regarding online Quran classes (for kids, women, adults) and 3-Day Free Trial.";
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function getEmailLink() {
  const subject = encodeURIComponent("Inquiry: 3 Days Free Trial - Online Quran Academy (For Everyone)");
  const body = encodeURIComponent("Assalamu Alaikum,\n\nI would like to inquire about enrolling in Online Quran Academy.\n\nStudent Name:\nAge & Gender (Kids, Female, Male, Adult, Elder):\nCountry/City:\nPreferred Timing:\nDesired Course:\n\nJazakAllah Khair.");
  return `mailto:muhammadfaqir5544332@gmail.com?subject=${subject}&body=${body}`;
}
