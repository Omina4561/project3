import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";
import enTranslation from '../locales/en/translations.json'
import uzTranslation from '../locales/uz/translations.json'
import ruTranslation from '../locales/ru/translations.json'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            uz: { translation: uzTranslation },
            ru: { translation: ruTranslation }
        },
        fallbackLng: 'en',
        interpolations: {
            escapeValue: false
        }
    })

export default i18n