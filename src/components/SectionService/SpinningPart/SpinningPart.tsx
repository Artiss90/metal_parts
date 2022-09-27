import React from 'react';
import partIcon from 'img/Vectorparts.svg';
import sn from 'classnames';
import style from './SpinningPart.module.css';

interface IProps {
  size: 'normal' | 'big',
  onSpinning: boolean,
  reverse?: boolean
}

function SpinningPart({ size = 'normal', onSpinning, reverse }:IProps) {
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
