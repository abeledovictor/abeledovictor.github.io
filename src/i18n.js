import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_es from "./translations/es/common.json";
import common_en from "./translations/en/common.json";
import posts_es from './posts/es/common.json';
import posts_en from './posts/en/common.json';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// not like to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
          common: common_en,
          posts: posts_en
      },
      es: {
          common: common_es,
          posts: posts_es
      },
    }
  });


export default i18n;