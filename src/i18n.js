import i18n from "i18next";
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector';
import { useTranslation, initReactI18next } from "react-i18next";

// import HttpApi from 'i18next-http-backend';
// import 'bootstrap/dist/js/bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'flag-icon-css/css/flag-icon.min.css';




i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debag: true,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n


// function I18n() {
//   const { t } = useTranslation();

//   return <h2>{t("welcome_message")}</h2>;
// }

