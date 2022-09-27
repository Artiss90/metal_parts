import React from 'react';
import img1 from 'img/jpg/Rectangle 17.jpg';

import style from './Cart.module.css';

interface IProps {
  imgSrc?: string,
  children: JSX.Element[] | JSX.Element
}

function Cart({ imgSrc = img1, children }:IProps) {
  return (
    <div className={style.container}>
      {children}
      <img src={imgSrc} alt="metal part" />
    </div>
  );
}

export default Cart;
