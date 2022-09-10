import React from 'react';
import { BadgePropTypes } from './Badge.types';
import classes from '../../styles/components/badge.module.scss';

function Badge({ text, color }: BadgePropTypes) {
  return (
    <span className={classes.badge} style={{ backgroundColor: color }}>
      {text}
    </span>
  );
}

export default Badge;
