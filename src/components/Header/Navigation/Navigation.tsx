import React from 'react';
import { FormattedMessage } from 'react-intl';

import sn from 'classnames';
import style from './Navigation.module.css';

function Navigation() {
  const onChangeCurrentNavLink: React.MouseEventHandler<HTMLAnchorElement> = e => {
    //* если таргет это навигационная ссылка, которая не была выбрана ранее
    if (
      e.currentTarget.hasAttribute('data-selected') &&
      e.currentTarget.getAttribute('data-selected') === 'false'
    ) {
      //* деактивируем выбранную ранее ссылку и активируем текущую
      const linkNavRef = document.querySelector('a[data-selected=true]');
      if (linkNavRef) {
        linkNavRef.setAttribute('data-selected', 'false');
        e.currentTarget.setAttribute('data-selected', 'true');
      }
    }
  };

  return (
    <nav>
      <ul className={style.listNav} >
        <li className={style.itemNav}>
          <a onClick={onChangeCurrentNavLink}
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
          <a onClick={onChangeCurrentNavLink}
            href="#Service"
            className={style.linkNav}
            data-selected={false}> 
            <FormattedMessage
              id="header.nav.services"
              defaultMessage="Услуги"
            />
          </a>
        </li>
        <li className={style.itemNav}>
          <a onClick={onChangeCurrentNavLink}
            href="#3"
            className={style.linkNav}
            data-selected={false}>
            <FormattedMessage
              id="header.nav.ourWork"
              defaultMessage="Наши работы"
            />
          </a>
        </li>
        <li className={style.itemNav}>
          <a onClick={onChangeCurrentNavLink}
            href="#OurCompany"
            className={style.linkNav}
            data-selected={false}>
            <FormattedMessage id="header.nav.aboutUs" defaultMessage="О нас" />
          </a>
        </li>
        <li className={style.itemNav}>
          <a onClick={onChangeCurrentNavLink}
            href="#Footer"
            className={style.linkNav}
            data-selected={false}>
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
