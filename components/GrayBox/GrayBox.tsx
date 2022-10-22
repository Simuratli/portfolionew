import React from 'react';
import classes from '../../styles/components/graybox.module.scss';
import { GrayBoxPropTypes } from './GrayBox.types';

function GrayBox({ children }: GrayBoxPropTypes) {
  return <div className={classes.graybox} dangerouslySetInnerHTML={{ __html: children }} />;
}

export default React.memo(GrayBox);
