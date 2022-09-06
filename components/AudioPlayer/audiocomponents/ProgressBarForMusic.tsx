import React from 'react';
import classes from '../../../styles/components/audioplayer.module.scss';
import Chapters from './Chapters';
import {
  ChapterTypes,
  ProgressBarForMusicPropTypes,
} from '../AudioPlayer.types';

function ProgressBarForMusic({
  progressBarRef,
  changeRange,
  duration,
}: ProgressBarForMusicPropTypes) {
  const chapters: ChapterTypes[] = [];

  return (
    <div className={classes.progressBarWrapper}>
      <input
        ref={progressBarRef}
        type="range"
        onChange={changeRange}
        defaultValue={0}
        className={classes.progressBar}
      />
      <Chapters chapters={chapters} duration={duration} />
    </div>
  );
}

export default ProgressBarForMusic;
