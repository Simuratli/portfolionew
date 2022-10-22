import React from 'react';
import Image from 'next/image';
import classes from '../../styles/components/musiccard.module.scss';
import { MusicCardPropTypes } from './MusicCard.types';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
import {
  setPlayerMusic,
  setPlay,
  audioReducerType,
} from '../../redux/reducers/audio';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';

function MusicCard({ image, singer, name, music }: MusicCardPropTypes) {
  const dispatch = useDispatch();
  const musicPlayer = useSelector<RootState, audioReducerType>(
    (state) => state.player
  );

  const onClickPlay = () => {
    dispatch(
      setPlayerMusic({
        isPlaying: false,
        name: `${name} - ${singer}`,
        music: music,
      })
    );

    if (musicPlayer.name.includes(name)) {
      if (!musicPlayer.isPlaying) {
        dispatch(setPlay(true));
      }
    } else {
      dispatch(setPlay(true));
    }
  };

  return (
    <div onClick={onClickPlay} className={classes.musicCard}>
      <div className={classes.musicCard__image}>
        <button className={classes.musicCard__icon}>
          {musicPlayer.isPlaying ? (
            musicPlayer.name.includes(name) ? (
              <AiOutlinePauseCircle />
            ) : (
              <AiOutlinePlayCircle />
            )
          ) : (
            <AiOutlinePlayCircle />
          )}
        </button>
        <Image layout="fill" alt={singer} src={image} />
      </div>
      <div className={classes.musicCard__content}>
        <h1>{name}</h1>
        <p className={classes.musicCard__content__musician}>{singer}</p>
      </div>
      <div>
        {musicPlayer.name.includes(name) && (
          <span className={classes.musicCard__active__dot}></span>
        )}
      </div>
    </div>
  );
}

export default React.memo(MusicCard);
