import React from 'react';
import Slick from 'react-slick';
import baner1 from 'img/jpg/baner.jpg';
import baner2 from 'img/jpg/Rectangle 25company1.jpg';
import baner3 from 'img/jpg/Rectangle 25company2.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './customSlider.css';
import style from './Slider.module.css';

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
            Высокоточное изготовление изделий из металла по чертежам
          </p>
          <img src={baner1} alt="metal parts" className={style.img} />
        </div>
        <div className={style.containerCart}>
          <p className={style.label}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad.
          </p>
          <img src={baner2} alt="metal parts" className={style.img} />
        </div>
        <div className={style.containerCart}>
          <p className={style.label}>
            Высокоточное изготовление изделий из металла по чертежам
          </p>
          <img src={baner1} alt="metal parts" className={style.img} />
        </div>
        <div className={style.containerCart}>
          <p className={style.label}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad.
          </p>
          <img src={baner3} alt="metal parts" className={style.img} />
        </div>
      </Slick>
    </div>
  );
}

export default Slider;
