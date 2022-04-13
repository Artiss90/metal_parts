import React from 'react';
import img1 from 'img/jpg/Rectangle 17.jpg';

import style from './Cart.module.css';

function Cart({ imgSrc = img1, children }) {
  return (
    <div className={style.container}>
      {children}
      <img src={imgSrc} alt="metal part" />
    </div>
  );
}

export default Cart;
