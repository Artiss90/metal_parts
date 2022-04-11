import React, { useState } from 'react';
import ButtonFlag from './ButtonFlag/ButtonFlag';
//* icons
import iconSearch from 'img/Vectorsearch.svg';
import iconArrow from 'img/down arrow.svg';
import iconUA from 'img/Flag_of_Ukraine 1ua.svg';
import iconRU from 'img/Flag_of_Russia 1.svg';
import iconEN from 'img/Flag_of_the_United_Kingdom.svg';
//* style
import sn from 'classnames';
import style from './Tools.module.css';

function Tools() {
  const [isShowListFlags, setIsShowListFlags] = useState(false);
  const [[visibleFlagIcon, visibleFlagTitle], setVisibleFlag] = useState([
    iconRU,
    'RU',
  ]);

  const toggleShow = () => setIsShowListFlags(!isShowListFlags);

  const onChangeVisibleFlag = (icon, title) => {
    setVisibleFlag([icon, title]);
    toggleShow();
  };

  return (
    <div className={style.tools}>
      <button type="button" className={style.btnSearch}>
        <img src={iconSearch} alt="search" title="search" />
      </button>

      <div className={style.containerFlags}>
        <ButtonFlag
          srcFlag={visibleFlagIcon}
          title={visibleFlagTitle}
          onClick={() => toggleShow()}
        >
          <img
            src={iconArrow}
            alt="arrow"
            className={sn(style.iconArrow, { [style.turn]: !isShowListFlags })}
          />
        </ButtonFlag>

        <ul className={sn(style.listFlag, { [style.show]: isShowListFlags })}>
          <li className={style.itemFlag}>
            <ButtonFlag
              srcFlag={iconRU}
              title="RU"
              onClick={() => onChangeVisibleFlag(iconRU, 'RU')}
            />
          </li>
          <li className={style.itemFlag}>
            <ButtonFlag
              srcFlag={iconUA}
              title="UA"
              onClick={() => onChangeVisibleFlag(iconUA, 'UA')}
            />
          </li>
          <li className={style.itemFlag}>
            <ButtonFlag
              srcFlag={iconEN}
              title="EN"
              onClick={() => onChangeVisibleFlag(iconEN, 'EN')}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tools;
