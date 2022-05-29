import TitleBlockByFooter from 'components/common/TitleBlockByFooter/TitleBlockByFooter';

// * icons
import google from 'img/google.svg';
import instagram from 'img/instagram.svg';
import youtube from 'img/youtube.svg';
import facebook from 'img/facebook.svg';

import style from './Footer.module.css';

function Footer(props) {
  return (
    <footer className={style.container} id="Footer">
      <div>
        <TitleBlockByFooter text="О компании" />
        <ul className={style.list}>
          <li className={style.item}>
            <a href="/">Наши работы</a>
          </li>
          <li className={style.item}>
            <a href="/">Контакты</a>
          </li>
          <li className={style.item}>
            <a href="/">Доставка</a>
          </li>
          <li className={style.item}>
            <a href="/">Форма заказа</a>
          </li>
        </ul>
      </div>
      <div>
        <TitleBlockByFooter text="Услуги" />

        <ul className={style.list}>
          <li className={style.item}>
            <a href="#Service">Производство оборудования</a>
          </li>
          <li className={style.item}>
            <a href="#Service">Раскрой металла</a>
          </li>
          <li className={style.item}>
            <a href="#Service">Металлическая мебель</a>
          </li>
          <li className={style.item}>
            <a href="#Service">Конструкторское бюро</a>
          </li>
          <li className={style.item}>
            <a href="#Service">Металлоконструкции</a>
          </li>
          <li className={style.item}>
            <a href="#Service">Аренда техники</a>
          </li>
          <li className={style.item}>
            <a href="#Service">Металлообработка</a>
          </li>
          <li className={style.item}>
            <a href="#Service">Ремонт техники</a>
          </li>
        </ul>
      </div>
      <div>
        <TitleBlockByFooter text="Контактная информация" />
        <address className={style.address}>
          <p className={style.itemAddress}>
            Заводская улица, 2В, Буча,Киевская область, 08292"
          </p>
          <p className={style.itemAddress}>ПН - ПТ: 09:00 - 18:00</p>
          <a className={style.itemAddress} href="tel:+38(097)123-45-67">
            +38(097)123-45-67
          </a>
          <ul className={style.socialList}>
            <li className={style.socialItem}>
              <a href="/">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li className={style.socialItem}>
              <a href="/">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li className={style.socialItem}>
              <a href="/">
                <img src={youtube} alt="youtube" />
              </a>
            </li>
            <li className={style.socialItem}>
              <a href="/">
                <img src={google} alt="google" />
              </a>
            </li>
          </ul>
        </address>
      </div>
    </footer>
  );
}

export default Footer;
