import iconUA from 'img/Flag_of_Ukraine 1ua.svg';
import iconRU from 'img/Flag_of_Russia 1.svg';
import iconEN from 'img/Flag_of_the_United_Kingdom.svg';

interface ILangs {
    en: [string, string];
    'ru-RU': [string, string];
    'uk-UA': [string, string];
}

const langs:ILangs = {
  en: [iconEN, 'en'],
  'ru-RU': [iconRU, 'ru-RU'],
  'uk-UA': [iconUA, 'uk-UA'],
};

export default langs;
