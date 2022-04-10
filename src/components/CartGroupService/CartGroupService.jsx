import React from 'react';
import Cart from 'components/CartGroupService/Cart/Cart';
import sn from 'classnames';

import style from './CartGroupService.module.css';
import LabelByCart from 'components/CartGroupService/LabelByCart/LabelByCart';

function CartGroupService({ groupImg = [], col = 3 }) {
  return (
    <ul className={style.list}>
      {groupImg.map(([imgSrc, title, description], index) => (
        <li
          key={index}
          className={sn(
            { [style.item_main]: col === 3 },
            { [style.item_second]: col === 2 },
          )}
        >
          <Cart imgSrc={imgSrc}>
            <LabelByCart title={title} description={description} />
          </Cart>
        </li>
      ))}
    </ul>
  );
}

export default CartGroupService;
