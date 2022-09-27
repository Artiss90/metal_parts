import React from 'react';
import Navigation from './Navigation/Navigation';
import Tools from './Tools/Tools';
import partIcon from 'img/Vectorparts.svg';

import style from './Header.module.css';

function Header() {
  return (
    <header className={style.header}>
      <img src={partIcon} alt="logo" className={style.logo}></img>
      <Navigation />
      <Tools />
    </header>
  );
}

export default Header;
