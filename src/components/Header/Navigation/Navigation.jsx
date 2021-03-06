import React from 'react';

import sn from 'classnames';
import style from './Navigation.module.css';

function Navigation(props) {
  const onChangeCurrentNavLink = e => {
    //* если таргет это навигационная ссылка, которая не была выбрана ранее
    if (
      e.target.hasAttribute('data-selected') &&
      e.target.getAttribute('data-selected') === 'false'
    ) {
      //* деактивируем выбранную ранее ссылку и активируем текущую
      const linkNavRef = document.querySelector('a[data-selected=true]');
      linkNavRef.setAttribute('data-selected', 'false');
      e.target.setAttribute('data-selected', 'true');
    }
  };

  return (
    <nav>
      <ul className={style.listNav} onClick={onChangeCurrentNavLink}>
        <li className={style.itemNav}>
          <a
            href="#1"
            className={sn(style.linkNav, {
              [style.current]: true,
            })}
            data-selected={true}
          >
            Главная
          </a>
        </li>
        <li className={style.itemNav}>
          <a href="#Service" className={style.linkNav} data-selected={false}>
            Услуги
          </a>
        </li>
        <li className={style.itemNav}>
          <a href="#3" className={style.linkNav} data-selected={false}>
            Наши работы
          </a>
        </li>
        <li className={style.itemNav}>
          <a href="#OurCompany" className={style.linkNav} data-selected={false}>
            О нас
          </a>
        </li>
        <li className={style.itemNav}>
          <a href="#Footer" className={style.linkNav} data-selected={false}>
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
