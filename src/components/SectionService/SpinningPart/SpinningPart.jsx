import React from 'react';
import partIcon from 'img/Vectorparts.svg';
import sn from 'classnames';
import style from './SpinningPart.module.css';

function SpinningPart({ size = 'normal', onSpinning, reverse }) {
  return (
    <img
      className={sn(
        style.icon,
        { [style.iconNormal]: size === 'normal' },
        { [style.iconBig]: size === 'big' },
        { [style.rotate]: onSpinning && !reverse },
        { [style.rotateReverse]: onSpinning && reverse },
      )}
      src={partIcon}
      alt="icon part"
    />
  );
}

export default SpinningPart;
