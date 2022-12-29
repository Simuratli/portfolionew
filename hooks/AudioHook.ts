import { useState, useRef, useEffect, useCallback } from "react";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { audioReducerType, setPlay } from "../redux/reducers/audio";
import { calculateTime } from "../utils/audio-utils";

export const useAudioPlayer = () => {
  const musicPlayer = useSelector<RootState, audioReducerType>(
    (state) => state.player
  );
  const dispatch = useDispatch();
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<any>(null);
  const progressBarRef = useRef<any>(null);
  const animationRef = useRef<any>(null);

  const togglePlay = () => {
    const prevData = musicPlayer.isPlaying;
    dispatch(setPlay(!prevData));
    if (!prevData) {
      audioRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const changePlayerCurrentTime = useCallback(() => {
    progressBarRef.current.style.setProperty(
      "--seek-before-width",
      `${(progressBarRef.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBarRef.current.value);
  }, [duration]);

  const whilePlaying = useCallback(() => {
    progressBarRef.current.value =
      audioRef.current && audioRef.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }, [changePlayerCurrentTime]);

  const changeRange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
    changePlayerCurrentTime();
  };

  const timeTravel = (newTime: number) => {
    progressBarRef.current.value = newTime;
    changeRange();
  };

  useEffect(() => {
    if (currentTime == duration) {
      timeTravel(0);
      if (duration !== 0) {
        togglePlay();
      }
    }
  }, [currentTime]);

  useEffect(() => {
    if (musicPlayer.isPlaying) {
      audioRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }, [musicPlayer.isPlaying, whilePlaying]);

  const onLoadedMetadata = (event: any) => {
    const seconds = Math.floor(audioRef.current.duration);
    progressBarRef.current.max = seconds;
    setDuration(seconds);
  };

  return {
    duration,
    currentTime,
    audioRef,
    progressBarRef,
    calculateTime,
    togglePlay,
    timeTravel,
    changeRange,
    onLoadedMetadata,
  };
};
