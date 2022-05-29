import { useEffect, useState, useCallback } from 'react';
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
import TitleBySection from 'components/common/TitleBySection/TitleBySection';

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

  const [onSpinning, setOnSpinning] = useState(false);

  const memoizedCallbackOnSpin = useCallback(() => {
    const onSpin = () => {
      setOnSpinning(true);

      setTimeout(() => {
        setOnSpinning(false);
      }, 2000);
    };

    onSpin(onSpinning);
  }, [onSpinning]);

  useEffect(() => {
    if (!onSpinning) {
      window.addEventListener('scroll', memoizedCallbackOnSpin);
    }

    return () => window.removeEventListener('scroll', memoizedCallbackOnSpin);
  }, [memoizedCallbackOnSpin, onSpinning]);

  return (
    <div className={style.wrapper}>
      <SpinningPart
        onSpinning={onSpinning}
        size="normal"
        // customStyle={{
        //   top: '465px',
        //   left: '10px',
        //   transform: 'rotate(-135deg)',
        // }}
      />
      <SpinningPart
        onSpinning={onSpinning}
        size="big"
        // customStyle={{
        //   top: '229px',
        //   left: '10px',
        //   transform: 'rotate(-135deg)',
        // }}
      />
      <SpinningPart
        onSpinning={onSpinning}
        size="normal"
        // customStyle={{
        //   top: '225px',
        //   right: '20px',
        //   transform: 'rotate(60deg)',
        // }}
      />
      <SpinningPart
        onSpinning={onSpinning}
        size="big"
        // customStyle={{
        //   top: '430px',
        //   right: '35px',
        //   transform: 'rotate(60deg)',
        // }}
      />
      <section className={style.containerCartGroupService} id="Service">
        <TitleBySection>Услуги</TitleBySection>
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
