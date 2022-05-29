import React from 'react';
import sn from 'classnames';
import style from './LabelByCart.module.css';

function LabelByCart({ title, description, isLargeLabel, isReverse }) {
  return (
    <div
      className={sn(
        style.container,
        { [style.largeContainer]: isLargeLabel },
        { [style.isReverse]: isReverse },
      )}
    >
      {title && (
        <p
          className={sn(
            style.title,
            { [style.largeTitle]: isLargeLabel },
            { [style.isReverse]: isReverse },
          )}
        >
          {title}
        </p>
      )}
      {description && (
        <p
          className={sn(
            style.description,
            { [style.largeDescription]: isLargeLabel },
            { [style.isReverse]: isReverse },
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default LabelByCart;
