import i18n from "i18next";
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    fallbackLng: ['en', 'ja'],
    debag: true,
    detection: {
      order: ['cookie', 'path', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
