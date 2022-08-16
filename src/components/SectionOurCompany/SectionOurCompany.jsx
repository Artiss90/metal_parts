import CartGroupService from 'components/CartGroupService/CartGroupService';
import TitleBySection from 'components/common/TitleBySection/TitleBySection';
import img1 from 'img/jpg/Rectangle 25company1.jpg';
import img2 from 'img/jpg/Rectangle 25company2.jpg';
import { FormattedMessage } from 'react-intl';

import style from './SectionOurCompany.module.css';

function SectionOurCompany() {
  const imgGroup = [
    [
      img1,
      'Почему мы?',
      'header.ourCompany.whyUs',
      'Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного',
      'header.ourCompany.whyUs_description',
    ],
    [
      img2,
      'Наши преимущества',
      'header.ourCompany.ourAdvantages',
      'Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного',
      'header.ourCompany.ourAdvantages_description',
    ],
  ];
  return (
    <section className={style.container} id="OurCompany">
      <TitleBySection modify={true}>
        <FormattedMessage
          id="header.ourCompany"
          defaultMessage="Наша компания"
        />
      </TitleBySection>
      <CartGroupService groupImg={imgGroup} col={1} />
    </section>
  );
}

export default SectionOurCompany;
