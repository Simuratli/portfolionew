import React from 'react';
import classes from '../../../styles/components/audioplayer.module.scss';
import { TimeComponentPropTypes } from '../AudioPlayer.types';

function Time({
  currentTime,
  duration,
  calculateTime,
}: TimeComponentPropTypes) {
  return (
    <div className={classes.audioPlayer__time}>
      <div className={classes.currentTime}>{calculateTime(currentTime)}</div>
      <div className={classes.duration}>
        {duration && !isNaN(duration) ? calculateTime(duration) : '00:00'}
      </div>
    </div>
  );
}

export default React.memo(Time);
