import React from 'react';
import style from './LabelByCart.module.css';

function LabelByCart({ title, description }) {
  return (
    <div className={style.container}>
      {title && <p className={style.title}>{title}</p>}
      {description && <p className={style.description}>{description}</p>}
    </div>
  );
}

export default LabelByCart;
