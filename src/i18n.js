import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from './locales/en.json'
import urTranslation from './locales/ur.json'

const resources = {
  en: {
    translation: enTranslation
  },
  ur: {
    translation: urTranslation
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language is English as required
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

// Update html lang and dir attribute when language changes
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  document.documentElement.dir = lng === 'ur' ? 'rtl' : 'ltr'
})

export default i18n
