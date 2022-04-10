import React from 'react';
import style from './Navigation.module.css';

function Navigation(props) {
  return (
    <nav>
      <ul className={style.listNav}>
        <li className={style.itemNav}>
          <a href="#" className={style.linkNav}>
            Главная
          </a>
        </li>
        <li className={style.itemNav}>
          <a href="#Service" className={style.linkNav}>
            Услуги
          </a>
        </li>
        <li className={style.itemNav}>
          <a href="#" className={style.linkNav}>
            Наши работы
          </a>
        </li>
        <li className={style.itemNav}>
          <a href="#" className={style.linkNav}>
            О нас
          </a>
        </li>
        <li className={style.itemNav}>
          <a href="#" className={style.linkNav}>
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
