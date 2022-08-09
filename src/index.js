import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'modern-normalize/modern-normalize.css';
import './index.css';

//Localisaton
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ru', 'ua'],
    fallbackLng: 'ru',
    detection: {
      order: ['localStorage'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });

ReactDOM.render(
  <Suspense fallback={'...Loading'}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root'),
);
