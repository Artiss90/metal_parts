import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Russian from 'lang/ru.json';
import Ukraine from 'lang/ua.json';
import English from 'lang/en.json';

interface ILangs {
  [keyText:string]: string,
}
interface IProps {
  children: JSX.Element[] | JSX.Element;
}



const langLocalStorage = localStorage.getItem('lang');
const local = langLocalStorage || navigator.language;
let lang:ILangs;
if (local === 'en') {
  lang = English;
} else {
  if (local === 'ru-RU') {
    lang = Russian;
  } else {
    if (local === 'uk-UA') {
      lang = Ukraine;
    } else {
      // default lang
      lang = English;
    }
  }
}

interface IContextType {
  locale: string,
  selectLanguage: (local:string)=>void
}

export const Context = React.createContext<IContextType | undefined>(undefined);

const Wrapper = ({children}:IProps) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLanguage(currentLang:string) {
    setLocale(currentLang);
    localStorage.setItem('lang', currentLang);

    if (currentLang === 'en') {
      setMessages(English);
    } else {
      if (currentLang === 'ru-RU') {
        setMessages(Russian);
      } else {
        if (currentLang === 'uk-UA') {
          setMessages(Ukraine);
        } else {
          setMessages(English);
        }
      }
    }
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
