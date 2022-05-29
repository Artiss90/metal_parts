import React from 'react';
import partIcon from 'img/Vectorparts.svg';
import sn from 'classnames';
import style from './SpinningPart.module.css';

function SpinningPart({ size = 'normal', customStyle, onSpinning }) {
  return (
    <img
      className={sn(
        style.icon,
        { [style.iconNormal]: size === 'normal' },
        { [style.iconBig]: size === 'big' },
        { [style.rotate]: onSpinning },
      )}
      // style={
      //   customStyle || {
      //     top: '229px',
      //     left: '10px',
      //     transform: 'rotate(-135deg)',
      //   }
      // }
      src={partIcon}
      alt="icon part"
    />
  );
}

export default SpinningPart;
