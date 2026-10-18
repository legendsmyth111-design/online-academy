# Online Quran Academy - Website (React.js + Tailwind CSS + Framer Motion)

A modern, responsive, high-converting Islamic educational website designed for **Online Quran Academy** under the guidance of **Maulana Qari Mohammad Fakir**. Specially tailored for overseas students across the **UK, USA, and Canada (For Boys Only)**.

---

## 🌟 Key Highlights & Design System

- **Islamic Luxury Theme:** Deep Vivid Navy Blue (`#0B1F3A` / `#13294B`), rich gold accents (`#C9A227`), and off-white/cream text with subtle Islamic geometric star patterns and arabesque styling.
- **Bilingual Support (EN | اردو):** Real-time language toggle in the top-right navbar built with `react-i18next`. Dynamically switches text, fonts (`Amiri` / `Poppins` / `Noto Nastaliq Urdu`), and layout direction (`ltr` / `rtl`).
- **Interactive Multi-Page Navigation:** Built with `react-router-dom`:
  1. **Home (`/`):** Hero section with serene Islamic aesthetics, trust bar, 6 core academy features, course preview, teacher spotlight, flyer preview, 3 realistic 5-star testimonials from UK/USA/Canada parents, and call-to-action sections.
  2. **Courses (`/courses`):** Complete grid for all 7 programs with filter tabs, syllabus outlines, age brackets, duration, and direct WhatsApp enrollment.
  3. **About Teacher (`/about`):** Detailed biography of Maulana Qari Mohammad Fakir (8+ Years Experience), teaching pedagogy, authentic Tajweed Sanad, and an interactive zoomable modal for the official promotional poster.
  4. **Contact Us (`/contact`):** Official helpline numbers (`03496663059` and `+92 346 1089824`), email (`muhammadfaqir5544332@gmail.com`), and an interactive registration form that opens WhatsApp with a pre-filled student registration message.
- **3-Day Free Demo Trial Booking:** Available from any page with a click, launching a customized registration modal.
- **Sticky Floating Elements:**
  - Floating WhatsApp button with live ping badge on bottom-right.
  - Floating Email button.
  - Smooth scroll-to-top button.

---

## 📂 Project Structure

```text
online-quran-academy/
├── public/
│   └── assets/
│       ├── teacher.jpg        # Maulana Qari Mohammad Fakir photo
│       └── poster.jpg         # Official Academy Promotional Poster
├── src/
│   ├── assets/
│   │   ├── teacher.jpg        # Source asset
│   │   └── poster.jpg         # Source flyer
│   ├── components/
│   │   ├── CourseCard.jsx     # Course card with syllabus preview
│   │   ├── FloatingButtons.jsx# Sticky WhatsApp, Email, & ScrollToTop
│   │   ├── Footer.jsx         # Islamic themed multi-column footer
│   │   ├── IslamicPattern.jsx # 8-point star & geometric SVG ornaments
│   │   ├── Navbar.jsx         # Sticky header with EN|UR toggle & drawer
│   │   └── TrialModal.jsx     # 3-Day Free Demo booking modal
│   ├── data/
│   │   └── academyData.js     # Centralized academy data & WhatsApp helpers
│   ├── locales/
│   │   ├── en.json            # English translations
│   │   └── ur.json            # Urdu translations (with RTL support)
│   ├── pages/
│   │   ├── About.jsx          # Teacher biography & poster view
│   │   ├── Contact.jsx        # Helplines & WhatsApp booking form
│   │   ├── Courses.jsx        # 7 courses directory & FAQs
│   │   └── Home.jsx           # Landing page with hero & testimonials
│   ├── App.jsx                # Router configuration & modal state
│   ├── i18n.js                # react-i18next configuration
│   ├── index.css              # Tailwind + Islamic gold styling & patterns
│   └── main.jsx               # Application entry point
├── index.html                 # HTML template with Google Fonts (Amiri, Poppins)
├── package.json               # Dependencies & scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Custom dark navy & gold theme extension
├── vite.config.js             # Vite configuration
└── README.md                  # Project documentation
```

---

## 🖼️ Assets Placed

The uploaded images have already been copied to:
- `public/assets/teacher.jpg`
- `public/assets/poster.jpg`
- `src/assets/teacher.jpg`
- `src/assets/poster.jpg`

If you ever wish to replace the images in the future, simply overwrite `teacher.jpg` and `poster.jpg` inside `public/assets/` or `src/assets/`.

---

## 🚀 How to Run Locally

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### 2. Installation
Open your terminal in the project directory:
```bash
cd online-quran-academy
npm install
```

### 3. Development Server
Start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port displayed in the console).

### 4. Production Build
To generate the optimized production-ready bundle:
```bash
npm run build
```
The output files will be created in the `dist/` directory, ready to deploy to Vercel, Netlify, Firebase Hosting, or GitHub Pages.

To test the production build locally:
```bash
npm run preview
```

---

## 🕌 Included Courses

1. **Noorani Qaida (Basics):** Arabic alphabet recognition, Makharij articulation, vowels, Tanween, Madd, and joining letters.
2. **Nazra Quran (Fluent Reading):** Continuous 30-Para recitation with proper pauses (Waqf) and melodious flow.
3. **Hifz-ul-Quran (Memorization):** Systematic daily Sabaq, Sabqi, and Manzil revisions under experienced Hafiz guidance.
4. **Tajweed Rules (Pronunciation):** Ghunnah, Ikhfa, Idgham, Qalqalah, and letter attributes.
5. **Tarjuma-e-Quran (Translation):** Word-by-word translation, Asbab al-Nuzul, and moral reflections.
6. **Namaz Lesson (Salah):** Sunnah Wudu, 5 daily prayers, Raka'at breakdown, Tashahhud, and Dua-e-Qunoot.
7. **Masnoon Duain (Daily Supplications):** Essential morning/evening supplications, daily Sunnah etiquette, and 40 Rabbana Duas.

---

## 📞 Academy Contact Details

- **Lead Instructor:** Maulana Qari Mohammad Fakir (8+ Years Teaching Experience)
- **Primary WhatsApp:** `0349 6663059` (+92 349 6663059)
- **Secondary Helpline:** `+92 346 1089824`
- **Email:** `muhammadfaqir5544332@gmail.com`
- **Class Format:** Live 1-on-1 via Zoom
- **Trial Offer:** 3 Days FREE Demo Classes (Zero Obligation)
