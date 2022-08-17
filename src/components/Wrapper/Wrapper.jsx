import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Russian from 'lang/ru.json';
import Ukraine from 'lang/ua.json';
import English from 'lang/en.json';

export const Context = React.createContext();

const local = navigator.language;

let lang;
if (local === 'en') {
  lang = English;
} else {
  if (local === 'ru-RU') {
    lang = Russian;
  } else {
    if (local === 'uk-UA') {
      lang = Ukraine;
    } else {
      lang = Russian;
    }
  }
}

const Wrapper = props => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLanguage(currentLang) {
    setLocale(currentLang);
    if (currentLang === 'en') {
      setMessages(English);
    } else {
      if (currentLang === 'ru-RU') {
        setMessages(Russian);
      } else {
        if (currentLang === 'uk-UA') {
          setMessages(Ukraine);
        } else {
          setMessages(Russian);
        }
      }
    }
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
