/* eslint-disable import/no-named-as-default-member */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: {
          title: 'Welcome to GraphiQL',
        },
      },
    },
    ru: {
      translation: {
        welcome: {
          title: 'ДОБРО ПОЖАЛОВАТЬ GraphiQL',
        },
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  detection: {
    order: ['localStorage'],
    cache: ['localStorage'],
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
