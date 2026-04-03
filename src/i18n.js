import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./lang/en/translation.json";
import ruTranslation from "./lang/ru/translation.json";
import uzTranslation from "./lang/uz/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ru: { translation: ruTranslation },
    uz: { translation: uzTranslation },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;