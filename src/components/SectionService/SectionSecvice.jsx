import React from 'react';
import CartGroupService from 'components/CartGroupService/CartGroupService';
import img1 from 'img/jpg/Rectangle 17.jpg';
import img2 from 'img/jpg/Rectangle 18.jpg';
import img3 from 'img/jpg/Rectangle 19.jpg';
import img4 from 'img/jpg/Rectangle 20.jpg';
import img5 from 'img/jpg/Rectangle 21.jpg';
import img6 from 'img/jpg/Rectangle 22.jpg';
import img7 from 'img/jpg/Rectangle 23last.jpg';
import img8 from 'img/jpg/Rectangle 24last.jpg';

import style from './SectionService.module.css';
import SpinningPart from 'components/SectionService/SpinningPart/SpinningPart';

function SectionService(props) {
  const imgGroupFirst = [
    [img1, 'Производство оборудования'],
    [img2, 'Металлическая мебель'],
    [img3, 'Металлоконструкции'],
    [img4, 'Металлообработка'],
    [img5, 'Раскрой металла'],
    [img6, 'Конструкторское бюро'],
  ];
  const imgGroupSecond = [
    [img7, 'Аренда техники'],
    [img8, 'Ремонт техники'],
  ];
  return (
    <div className={style.wrapper}>
      <SpinningPart
        size="normal"
        styleInline={{
          top: '465px',
          left: '10px',
          transform: 'rotate(-135deg)',
        }}
      />
      <SpinningPart
        size="big"
        styleInline={{
          top: '229px',
          left: '10px',
          transform: 'rotate(-135deg)',
        }}
      />
      <SpinningPart
        size="normal"
        styleInline={{
          top: '225px',
          right: '20px',
          transform: 'rotate(60deg)',
        }}
      />
      <SpinningPart
        size="big"
        styleInline={{
          top: '430px',
          right: '35px',
          transform: 'rotate(60deg)',
        }}
      />
      <section className={style.containerCartGroupService} id="Service">
        <h2 className={style.title}>Услуги</h2>
        <CartGroupService groupImg={imgGroupFirst} col={3} />
        <CartGroupService groupImg={imgGroupSecond} col={2} />
        <button type="button" className={style.bntCalc}>
          Быстрый расчет цены по чертежу
        </button>
      </section>
    </div>
  );
}

export default SectionService;
