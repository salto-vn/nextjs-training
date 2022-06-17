import i18n from 'i18next'
import Backend from 'i18next-http-backend'
// import Cache from 'i18next-localstorage-cache'
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from 'react-i18next'
// import en from './lang/en.json'
// import vi from './lang/vi.json'

import en from "./public/locales/en-US/common.json"
import vi from "./public/locales/vi-VN/common.json"

const resources = {
  en: {
    translation: en
  },
  vi: {
    translation: vi
  }
}

i18n
  .use(Backend)
  // .use(Cache)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    // lng: "en", // use this will make language always en on reload page
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    react: { useSuspense: false },
  })


export default i18n
