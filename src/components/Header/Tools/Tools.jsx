import React from 'react';
import iconSearch from 'img/Vectorsearch.svg';
import iconUA from 'img/Flag_of_Ukraine 1ua.svg';
import iconRU from 'img/Flag_of_Russia 1.svg';
import iconEN from 'img/Flag_of_the_United_Kingdom.svg';

import style from './Tools.module.css';

function Tools(props) {
  return (
    <div className={style.tools}>
      <button type="button">
        <img src={iconSearch} alt="search" title="search" />
      </button>
      <ul className={style.listFlag}>
        <li>
          <button>
            <img src={iconRU} alt="RU" />
          </button>
        </li>
        <li>
          <button>
            <img src={iconUA} alt="UA" />
          </button>
        </li>
        <li>
          <button>
            <img src={iconEN} alt="EN" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Tools;
