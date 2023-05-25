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
        errorNotification: {
          messageIn: 'Invalid User Credentials',
          descriptionIn:
            "We're sorry, but the provided login credentials are invalid. Please double-check your email and password and try again. If you don't have an account, please sign up to access our services",
          messageUp: 'Sign Up Failed',
          descriptionUp:
            'We regret to inform you that an error has occurred during the sign-up process',
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
        errorNotification: {
          messageIn: 'Неверные учетные данные пользователя',
          descriptionIn:
            'К сожалению, предоставленные учетные данные для входа недействительны. Пожалуйста, еще раз проверьте свой адрес электронной почты и пароль и повторите попытку. Если у вас нет учетной записи, пожалуйста, зарегистрируйтесь, чтобы получить доступ к нашему редактору',
          messageUp: 'Ошибка регистрации',
          descriptionUp: 'К сожалению, при регистрации произошла ошибка',
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
