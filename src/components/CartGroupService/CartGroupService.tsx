import React from 'react';
import Cart from 'components/CartGroupService/Cart/Cart';
import sn from 'classnames';

import style from './CartGroupService.module.css';
import LabelByCart from 'components/CartGroupService/LabelByCart/LabelByCart';
import { TImgGroup } from 'components/SectionService/SectionService';

interface IProps{
  groupImg?: TImgGroup,
  col?: number
}

function CartGroupService({ groupImg = [], col = 3 }:IProps) {
  return (
    <ul className={style.list}>
      {groupImg.map(
        // ! warning: order is important!
        ([imgSrc, title, titleId, description, descriptionId], index) => (
          <li
            key={index}
            className={sn(
              { [style.item_main]: col === 3 },
              { [style.item_second]: col === 2 },
              { [style.item_large]: col === 1 },
            )}
          >
            <Cart imgSrc={imgSrc}>
              <LabelByCart
                title={title}
                titleId={titleId}
                description={description}
                descriptionId={descriptionId}
                isLargeLabel={col === 1}
                // every even is reverse if 1 column
                isReverse={col === 1 && (index + 1) % 2 === 0}
              />
            </Cart>
          </li>
        ),
      )}
    </ul>
  );
}

export default CartGroupService;
