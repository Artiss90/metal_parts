import React, { useContext, useState } from 'react';
import ButtonFlag from './ButtonFlag/ButtonFlag';
import { Context } from 'components/Wrapper/Wrapper';
import { FormattedMessage } from 'react-intl';
import langs from 'components/common/langs/langs';
//* icons
import iconSearch from 'img/Vectorsearch.svg';
import iconArrow from 'img/down arrow.svg';

//* style
import sn from 'classnames';
import style from './Tools.module.css';

function Tools() {
  const context = useContext(Context);

  const [isShowFieldSearch, setIsShowFieldSearch] = useState(false);
  const [isShowListFlags, setIsShowListFlags] = useState(false);
  const [[visibleFlagIcon, visibleFlagTitle], setVisibleFlag] = useState(
    langs[context.locale] || langs['en'],
  );
  const [value, setValue] = useState('');

  const toggleShowFieldSearch = () => setIsShowFieldSearch(!isShowFieldSearch);
  const onChangeSearch = e => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const onSearch = target => {
    // ? there will be logic search
    //************ */
    // *clear value by input
    setValue('');
    // *hidden input
    toggleShowFieldSearch();
  };

  const toggleShowFlags = () => setIsShowListFlags(!isShowListFlags);

  const onChangeVisibleFlag = ([icon, title]) => {
    setVisibleFlag([icon, title]);
    context.selectLanguage(title);
    toggleShowFlags();
  };

  return (
    <div className={style.tools}>
      <div className={style.containerSearch}>
        <button
          type="button"
          className={sn(style.btnSearch, { [style.show]: isShowFieldSearch })}
          onClick={() => toggleShowFieldSearch()}
        >
          <img src={iconSearch} alt="search" title="search" />
        </button>

        <div
          className={sn(style.fieldSearch, { [style.show]: isShowFieldSearch })}
        >
          <FormattedMessage id="search" defaultMessage="search">
            {message => (
              <input
                type="text"
                className={style.inputSearch}
                placeholder={message}
                value={value}
                onChange={onChangeSearch}
              />
            )}
          </FormattedMessage>

          <button
            type="button"
            className={sn(style.btnSearch, style.inField)}
            onClick={() => onSearch(value)}
          >
            <img src={iconSearch} alt="search" title="search" />
          </button>
        </div>
      </div>

      <div className={style.containerFlags}>
        <ButtonFlag
          srcFlag={visibleFlagIcon}
          title={visibleFlagTitle}
          onClick={() => toggleShowFlags()}
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
              srcFlag={langs['ru-RU'][0]}
              title="RU"
              onClick={() => onChangeVisibleFlag(langs['ru-RU'])}
            />
          </li>
          <li className={style.itemFlag}>
            <ButtonFlag
              srcFlag={langs['uk-UA'][0]}
              title="UA"
              onClick={() => onChangeVisibleFlag(langs['uk-UA'])}
            />
          </li>
          <li className={style.itemFlag}>
            <ButtonFlag
              srcFlag={langs['en'][0]}
              title="EN"
              onClick={() => onChangeVisibleFlag(langs['en'])}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tools;
