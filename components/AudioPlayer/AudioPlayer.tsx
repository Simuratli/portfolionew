import React, { useEffect } from 'react';
import classes from '../../styles/components/audioplayer.module.scss';
import { useAudioPlayer } from '../../hooks/AudioHook';
import { Time, ProgressBarForMusic, AudioControl } from './audiocomponents';
import Heading from '../Heading';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { audioReducerType } from '../../redux/reducers/audio';

function AudioPlayer() {
  const {
    duration,
    currentTime,
    audioRef,
    progressBarRef,
    calculateTime,
    togglePlay,
    changeRange,
    onLoadedMetadata,
  } = useAudioPlayer();

  const musicPlayer = useSelector<RootState, audioReducerType>(
    (state) => state.player
  );

  return (
    <div className={classes.audioPlayer}>
      <div className={classes.audioPlayer__content}>
        <audio
          preload="metadata"
          onLoadedMetadata={onLoadedMetadata}
          ref={audioRef}
          src={musicPlayer.music}
        ></audio>
        <div className={classes.audioPlayer__main}>
          <Heading type="small">
            <>{musicPlayer.name}</>
          </Heading>
          <br />
          <div className={classes.audioPlayer__progress}>
            <Time
              calculateTime={calculateTime}
              currentTime={currentTime}
              duration={duration}
            />
            <ProgressBarForMusic
              changeRange={changeRange}
              progressBarRef={progressBarRef}
              duration={duration}
            />
          </div>
        </div>
        <AudioControl
          isPlaying={musicPlayer.isPlaying}
          togglePlay={togglePlay}
        />
      </div>
    </div>
  );
}

export default React.memo(AudioPlayer);
