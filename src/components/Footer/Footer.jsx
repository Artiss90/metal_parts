// * icons
import google from 'img/google.svg';
import instagram from 'img/instagram.svg';
import youtube from 'img/youtube.svg';
import facebook from 'img/facebook.svg';

import style from './Footer.module.css';
import { FormattedMessage } from 'react-intl';

function Footer(props) {
  return (
    <footer className={style.container} id="Footer">
      <div>
        <h3 className={style.title}>
          <FormattedMessage id="footer.company" defaultMessage="О компании" />
        </h3>
        <ul className={style.list}>
          <li className={style.item}>
            <a href="/">
              <FormattedMessage
                id="header.nav.ourWork"
                defaultMessage="Наши работы"
              />
            </a>
          </li>
          <li className={style.item}>
            <a href="/">
              <FormattedMessage
                id="header.nav.contacts"
                defaultMessage="Контакты"
              />
            </a>
          </li>
          <li className={style.item}>
            <a href="/">
              <FormattedMessage
                id="footer.delivery"
                defaultMessage="Доставка"
              />
            </a>
          </li>
          <li className={style.item}>
            <a href="/">
              <FormattedMessage
                id="footer.orderForm"
                defaultMessage="Форма заказа"
              />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className={style.title}>
          <FormattedMessage id="header.nav.services" defaultMessage="Услуги" />
        </h3>
        <ul className={style.list}>
          <li className={style.item}>
            <a href="#Service">
              <FormattedMessage
                id="services.equipmentManufacturing"
                defaultMessage="Производство оборудования"
              />
            </a>
          </li>
          <li className={style.item}>
            <a href="#Service">
              <FormattedMessage
                id="services.cuttingMetal"
                defaultMessage="Раскрой металла"
              />
            </a>
          </li>
          <li className={style.item}>
            <a href="#Service">
              <FormattedMessage
                id="services.metalFurniture"
                defaultMessage="Металлическая мебель"
              />
            </a>
          </li>
          <li className={style.item}>
            <a href="#Service">
              <FormattedMessage
                id="services.designDepartment"
                defaultMessage="Конструкторское бюро"
              />
            </a>
          </li>
          <li className={style.item}>
            <a href="#Service">
              <FormattedMessage
                id="services.metalStructures"
                defaultMessage="Металлоконструкции"
              />
            </a>
          </li>
          <li className={style.item}>
            <a href="#Service">
              <FormattedMessage
                id="services.equipmentRental"
                defaultMessage="Аренда техники"
              />
            </a>
          </li>
          <li className={style.item}>
            <a href="#Service">
              <FormattedMessage
                id="services.metalworking"
                defaultMessage="Металлообработка"
              />
            </a>
          </li>
          <li className={style.item}>
            <a href="#Service">
              <FormattedMessage
                id="services.equipmentRepair"
                defaultMessage="Ремонт техники"
              />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className={style.title}>
          <FormattedMessage
            id="footer.contactInformation"
            defaultMessage="Контактная информация"
          />
        </h3>
        <address className={style.address}>
          <p className={style.itemAddress}>
            вулиця Заводська, 2В, Буча, Київська область, 08292
          </p>
          <p className={style.itemAddress}>
            <FormattedMessage
              id="footer.businessHours"
              defaultMessage="ПН - ПТ: 09:00 - 18:00"
            />
          </p>
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
