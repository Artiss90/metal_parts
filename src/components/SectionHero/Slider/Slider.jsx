import React from 'react';
import Slick from 'react-slick';
import banner1 from 'img/jpg/Banner.jpg';
import banner2 from 'img/jpg/Rectangle 25company1.jpg';
import banner3 from 'img/jpg/Rectangle 25company2.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './customSlider.css';
import style from './Slider.module.css';
import { FormattedMessage } from 'react-intl';

function Slider() {
  const settings = {
    dots: true,
    draggable: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={style.container}>
      <Slick {...settings}>
        <div className={style.containerCart}>
          <p className={style.label}>
            <FormattedMessage
              id="slider.banner1"
              defaultMessage="Высокоточное изготовление изделий из металла по чертежам"
            />
          </p>
          <img src={banner1} alt="metal parts" className={style.img} />
        </div>
        <div className={style.containerCart}>
          <p className={style.label}>
            <FormattedMessage
              id="slider.banner2"
              defaultMessage="Современный подход к изготовлению деталей высокого качества"
            />
          </p>
          <img src={banner2} alt="metal parts" className={style.img} />
        </div>
        <div className={style.containerCart}>
          <p className={style.label}>
            <FormattedMessage
              id="slider.banner1"
              defaultMessage="Высокоточное изготовление изделий из металла по чертежам"
            />
          </p>
          <img src={banner1} alt="metal parts" className={style.img} />
        </div>
        <div className={style.containerCart}>
          <p className={style.label}>
            <FormattedMessage
              id="slider.banner2"
              defaultMessage="Современный подход к изготовлению деталей высокого качества"
            />
          </p>
          <img src={banner3} alt="metal parts" className={style.img} />
        </div>
      </Slick>
    </div>
  );
}

export default Slider;
