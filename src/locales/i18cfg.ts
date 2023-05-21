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
        auth: {
          signIn: 'Sign In',
          signUp: 'Sign Up',
          logout: 'Logout',
        },
        form: {
          titleIn: 'Sign In',
          titleUp: 'Sign Up',
          buttonIn: 'Sign In',
          buttonUp: 'Sign Up',
          email: 'Email',
          password: 'Password',
          emailInput: 'Please enter your email!',
          passInput: 'Please enter your password!',
          emailValid: 'Please enter a valid email address',
          passValid: 'Min 8 chars (uppercase, lowercase, digit and special char)',
        },
        graphiql: {
          variables: 'Variables',
          headers: 'Headers',
          query: 'Execute query',
          docs: 'Docs',
        },
      },
    },
    ru: {
      translation: {
        welcome: {
          title: 'Добро пожаловать в GraphiQL',
        },
        auth: {
          signIn: 'Вход',
          signUp: 'Регистрация',
          logout: 'Выход',
        },
        form: {
          titleIn: 'Вход',
          titleUp: 'Регистрация',
          buttonIn: 'Войти',
          buttonUp: 'Зарегистрироваться',
          email: 'Электронная почта',
          password: 'Пароль',
          emailInput: 'Пожалуйста введите электронную почту!',
          passInput: 'Пожалуйста введите пароль!',
          emailValid: 'Пожалуйста введите валидную электронную почту!',
          passValid: 'Минимум 8 символов (прописная и строчная буква, цифра, специальный символ)',
        },
        graphiql: {
          variables: 'Переменные',
          headers: 'Заголовки',
          query: 'Выполнить запрос',
          docs: 'Документация',
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
