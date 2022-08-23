import React from 'react';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
import { AudioControlsPropTypes } from '../AudioPlayer.types';
import classes from '../../../styles/components/audioplayer.module.scss';

function AudioControl({ togglePlay, isPlaying }: AudioControlsPropTypes) {
  return (
    <div className={classes.audio__control}>
      <button className={classes.playPause} onClick={togglePlay}>
        {
          isPlaying ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />
        }
      </button>
    </div>
  )
}

export default AudioControl