import React, { useState, useRef, useEffect, ReactEventHandler, ChangeEvent } from 'react';
import classes from '../../styles/components/audioplayer.module.scss';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
import { HiOutlineVolumeUp } from 'react-icons/hi';
import { useAudioPlayer } from '../../hooks/AudioHook';
import { Chapters } from './audiocomponents';
import { ChapterTypes } from './AudioPlayer.types';



function AudioPlayer() {



  const [showVolume, setshowVolume] = useState(false)

  const {
    isPlaying,
    duration,
    currentTime,
    audioRef,
    progressBarRef,
    calculateTime,
    togglePlay,
    timeTravel,
    changeRange
  } = useAudioPlayer()

  const volumeRef = useRef(null)


  const chapters: ChapterTypes[] = []


  const changeVolume = (e: any) => {
    console.log(e.target.value, 'eegee')
    audioRef.current.volume = e.target.value / 100
  }


  return (
    <div className={classes.audioPlayer}>
      <div className={classes.audioPlayer__content}>

        <audio ref={audioRef} src='./public/music/[AMV] SUPER RISER! 「Do You Remember Love.mp3'></audio>
        <div className={classes.audioPlayer__progress}>

          <div className={classes.audioPlayer__time}>
            <div className={classes.currentTime}>{calculateTime(currentTime)}</div>
            <div className={classes.duration}>{duration && !isNaN(duration) && calculateTime(duration)}</div>
          </div>

          <div className={classes.progressBarWrapper}>
            <input ref={progressBarRef} type="range" onChange={changeRange} defaultValue={0} className={classes.progressBar} />
            <Chapters chapters={chapters} duration={duration} />
          </div>

        </div>

        <div className={classes.audio__control}>

          {/* <div className={classes.volumeWrapper}>
            <div className={`${classes.volumeInput} ${showVolume && classes.showVolume}`}>
              <input className={classes.volumeBar} type="range" onChange={changeVolume} defaultValue={100} />
            </div>

            <HiOutlineVolumeUp onClick={() => { setshowVolume(prev => !prev) }} />
          </div> */}

          <button className={classes.playPause} onClick={togglePlay}>
            {
              isPlaying ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer