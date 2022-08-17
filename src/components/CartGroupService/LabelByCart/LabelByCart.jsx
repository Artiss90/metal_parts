import React from 'react';
import sn from 'classnames';
import style from './LabelByCart.module.css';
import { FormattedMessage } from 'react-intl';

// 'idFromLang '- This value must always be a non-empty string and only string
function LabelByCart({
  title,
  titleId = 'idFromLang',
  description,
  descriptionId = 'idFromLang',
  isLargeLabel,
  isReverse,
}) {
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
          {title && <FormattedMessage id={titleId} defaultMessage={title} />}
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
          {description && (
            <FormattedMessage id={descriptionId} defaultMessage={description} />
          )}
        </p>
      )}
    </div>
  );
}

export default LabelByCart;
