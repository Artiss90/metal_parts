import React from 'react';
import { FormattedMessage } from 'react-intl';

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
            <FormattedMessage id="header.nav.main" defaultMessage="Главная" />
          </a>
        </li>
        <li className={style.itemNav}>
          <a href="#Service" className={style.linkNav} data-selected={false}>
            <FormattedMessage
              id="header.nav.services"
              defaultMessage="Услуги"
            />
          </a>
        </li>
        <li className={style.itemNav}>
          <a href="#3" className={style.linkNav} data-selected={false}>
            <FormattedMessage
              id="header.nav.ourWork"
              defaultMessage="Наши работы"
            />
          </a>
        </li>
        <li className={style.itemNav}>
          <a href="#OurCompany" className={style.linkNav} data-selected={false}>
            <FormattedMessage id="header.nav.aboutUs" defaultMessage="О нас" />
          </a>
        </li>
        <li className={style.itemNav}>
          <a href="#Footer" className={style.linkNav} data-selected={false}>
            <FormattedMessage
              id="header.nav.contacts"
              defaultMessage="Контакты"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
