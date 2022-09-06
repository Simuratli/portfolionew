import React from 'react';
import { TextPropTypes } from './Text.types';
import classes from '../../styles/components/text.module.scss';

function Text({ text }: TextPropTypes) {
  return <p className={classes.text}>{text}</p>;
}

export default Text;
