import { useState, useRef, useEffect } from "react";
import { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { audioReducerType, setPlay } from '../redux/reducers/audio';

export const useAudioPlayer = () => {
  const musicPlayer = useSelector<RootState, audioReducerType>((state) => state.player);
  const dispatch = useDispatch();
  // const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioRef = useRef<any>(null)
  const progressBarRef = useRef<any>(null)
  const animationRef = useRef<any>(null)



  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }



  const togglePlay = () => {
    const prevData = musicPlayer.isPlaying
    dispatch(setPlay(!prevData))
    if (!prevData) {
      console.log('AudioControlsPropTypes is undefined  for audio player.')
      audioRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioRef.current.pause()
      console.log('AudioControlsPropTypes is undefined  for audio player. 22')
      cancelAnimationFrame(animationRef.current)
    }
  }



  const whilePlaying = () => {
    progressBarRef.current.value = audioRef.current.currentTime;
    changePlayerCurrentTime()
    animationRef.current = requestAnimationFrame(whilePlaying)
  }


  const changePlayerCurrentTime = () => {
    progressBarRef.current.style.setProperty('--seek-before-width', `${progressBarRef.current.value / duration * 100}%`)
    setCurrentTime(progressBarRef.current.value)
  }


  const changeRange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
    changePlayerCurrentTime()
  }



  const timeTravel = (newTime: number) => {
    progressBarRef.current.value = newTime
    changeRange();
  }


  useEffect(() => {
    if (currentTime == duration) {
      timeTravel(0)
      if (duration !== 0) {
        togglePlay()
      }
    }
  }, [currentTime])


  useEffect(() => {
    if (musicPlayer.isPlaying) {
      console.log(audioRef.current.loadedmetadata, 'audioRef.current pp')
      audioRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioRef.current.pause()
      console.log('AudioControlsPropTypes is undefined  for audio player. 22')
      cancelAnimationFrame(animationRef.current)
    }

  }, [musicPlayer.isPlaying, whilePlaying])


  // useEffect(() => {
  //   const seconds = Math.floor(audioRef.current.duration)
  //   progressBarRef.current.max = seconds;
  //   setDuration(seconds)
  // }, [audioRef?.current?.loadedmetadata, audioRef?.current?.readyState])

  const onLoadedMetadata = (event: any) => {
    console.log(event.target.duration, 'event.target.duration')
    console.log(audioRef.current.duration, 'event.target.duration audioRef.current.duration')
    const seconds = Math.floor(audioRef.current.duration);
    progressBarRef.current.max = seconds;
    setDuration(seconds)
  }


  return {
    duration,
    currentTime,
    audioRef,
    progressBarRef,
    calculateTime,
    togglePlay,
    timeTravel,
    changeRange,
    onLoadedMetadata
  }
}