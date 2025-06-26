'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import translationUZ from './locales/uz/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      ru: { translation: translationRU },
      uz: { translation: translationUZ },
    },
    fallbackLng: 'uz',
    supportedLngs: ['uz', 'ru', 'en'],
    detection: {
      // Faqat localStorage va cookie dan aniqlaydi
      order: ['localStorage', 'cookie'],
      lookupLocalStorage: 'i18nextLng',
      lookupCookie: 'i18nextLng',
      caches: ['localStorage'],
      checkWhitelist: true,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
