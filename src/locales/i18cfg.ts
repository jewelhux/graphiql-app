/* eslint-disable import/no-named-as-default-member */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: {
          title: 'Welcome to GraphiQL',
          desc1:
            'This application that serves as a captivating playground for GraphQL requests, allowing users to immerse themselves in the fascinating realm of ',
          desc2:
            'Discover the wonders of space exploration, access mission details, rocket specifications, and launch histories with ease, all within an intuitive interface designed to bring the cosmos closer to your fingertips',
        },
        info: {
          devTitle: 'Developers',
          dev1Title: 'Ilya Danilov',
          dev1Des: 'Team leader, project setup, firebase, logic router, redux',
          dev2Title: 'Olga Kitel',
          dev2Des: 'Design, localization, docs, refactoring, stabilization and optimization',
          dev3Title: 'Eugeniy Kuzmin',
          dev3Des: 'App structure, GraphQL editor, docs, form validation, redux',
          countryRU: 'Russia',
          countryPL: 'Poland',
          schoolTitle: 'Rolling Scopes School',
          courseTitle: 'React course',
          courseDes:
            'Free of charge learning\n Open to everyone\n Learning materials\n Certificate\n',
          enrollBtn: 'Enroll',
        },
        auth: {
          redirect: 'Go to editor',
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
          errorDocs:
            "We're sorry, but according to the technical specification, the working documentation explorer should only be visible when the SDL request succeeds. For viewing the official documentation, you can follow the ",
          link: 'link',
          errorReq: 'Request failed',
          errorVar: 'Invalid value in the variables input',
        },
        loader: {
          loader: 'Loading...',
        },
        errorNotification: {
          messageNotFound: 'User not found',
          descriptionNotFound:
            "We're sorry, but the provided login credentials are invalid. Please double-check your email and try again. If you don't have an account, please sign up to access our services",
          messageWrongPass: 'Wrong password',
          descriptionWrongPass: 'Please double-check your password and try again',
          messageUp: 'Sign Up Failed',
          descriptionUp:
            'An error has occurred during the sign-up process. This email is already in use. ',
          messageDefault: 'An error occurred',
          descriptionDefault: 'Please try again later',
        },
      },
    },
    ru: {
      translation: {
        welcome: {
          title: 'Добро пожаловать в GraphiQL',
          desc1:
            'Приложение, которое является захватывающей площадкой для выполнения GraphQL-запросов, позволяющих пользователям окунуться в увлекательный мир ',
          desc2:
            'Откройте для себя чудеса космического исследования, получите доступ к деталям миссий, спецификациям ракет и истории запусков! Всё это в интуитивно понятном интерфейсе, что делает исследование космоса доступным для всех',
        },
        info: {
          devTitle: 'Разработчики',
          dev1Title: 'Илья Данилов',
          dev1Des: 'Лидер команды, настройка проекта, firebase, роутер, redux',
          dev2Title: 'Ольга Китель',
          dev2Des: 'Дизайн, перевод, стабилизация и оптимизация',
          dev3Title: 'Евгений Кузьмин',
          dev3Des: 'Архитектура, редактор GraphQL, документация, валидация формы, redux',
          countryRU: 'Россия',
          countryPL: 'Польша',
          schoolTitle: 'Rolling Scopes School',
          courseTitle: 'Курс по React',
          courseDes: 'Бесплатный\n Доступен каждому\n Учебные материалы\n Сертификат',
          enrollBtn: 'Записаться',
        },
        auth: {
          redirect: 'Редактор',
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
          errorDocs:
            'Извините, но согласно техническому заданию рабочая документация должна быть видима только при успешном выполнении запроса SDL. Для просмотра официальной документации вы можете перейти по ',
          link: 'ссылке',
          errorReq: 'Запрос не выполнен',
          errorVar: 'Невалидное значение переменных',
        },
        loader: {
          loader: 'Загрузка...',
        },
        errorNotification: {
          messageNotFound: 'Пользователь не найден',
          descriptionNotFound:
            'К сожалению, предоставленные учетные данные для входа недействительны. Пожалуйста, еще раз проверьте свой адрес электронной почты и повторите попытку. Если у вас нет учетной записи, пожалуйста, зарегистрируйтесь, чтобы получить доступ к нашему редактору',
          messageWrongPass: 'Неправильный пароль',
          descriptionWrongPass: 'Пожалуйста, еще раз проверьте свой пароль и повторите попытку',
          messageUp: 'Ошибка регистрации',
          descriptionUp:
            'К сожалению, при регистрации произошла ошибка. Данный адрес электронной почты уже используется',
          messageDefault: 'Ошибка',
          descriptionDefault: 'Повторите попытку позже',
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
