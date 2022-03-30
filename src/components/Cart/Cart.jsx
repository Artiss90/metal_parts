import React from 'react';
import img1 from 'img/jpg/Rectangle 17.jpg';

function Cart({ imgSrc = img1, children }) {
  return (
    <div>
      {children}
      <img src={imgSrc} alt="metal part" />
    </div>
  );
}

export default Cart;
