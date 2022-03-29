import React from 'react';
function Cart({ imgSrc = './img/jpg/Rectangle 17.jpg', children }) {
  return (
    <div>
      {children}
      <img src={imgSrc} alt="metal part" />
    </div>
  );
}

export default Cart;
