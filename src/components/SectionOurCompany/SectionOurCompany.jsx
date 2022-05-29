import CartGroupService from 'components/CartGroupService/CartGroupService';
import TitleBySection from 'components/common/TitleBySection/TitleBySection';
import img1 from 'img/jpg/Rectangle 25company1.jpg';
import img2 from 'img/jpg/Rectangle 25company2.jpg';

import style from './SectionOurCompany.module.css';

function SectionOurCompany() {
  const imgGroup = [
    [
      img1,
      'Почему мы?',
      'Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного',
    ],
    [
      img2,
      'Наши преимущества',
      'Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного',
    ],
  ];
  return (
    <section className={style.container} id="OurCompany">
      <TitleBySection inlineStyle={{ marginBottom: '30px' }}>
        Наша компания
      </TitleBySection>
      <CartGroupService groupImg={imgGroup} col={1} />
    </section>
  );
}

export default SectionOurCompany;
