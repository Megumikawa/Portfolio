import React from "react";
// import ReactDOM from "react-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'flag-icon-css/css/flag-icon.min.css';




i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'fr', 'ja'],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    }
  });

function I18n() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}


// const loadingMarkup = (
//   <div className="py-4 text-center">
//     <h2>Loading..</h2>
//   </div>
// )
// append app to dom
// ReactDOM.render(
  // <Suspense fallback={loadingMarkup}>
    // <React.StrictMode>
      // <App />,
    // </React.StrictMode>,
  // </Suspense>,
  // document.getElementById("root")
// );

export default i18n;