import React, { useEffect } from 'react';
import Image from 'next/image';
import classes from '../../styles/components/musiccard.module.scss';
import { MusicCardPropTypes } from './MusicCard.types';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
import { setPlayerMusic, setPlay } from '../../redux/reducers/audio';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';

function MusicCard({ image, singer, name, music }: MusicCardPropTypes) {
  const dispatch = useDispatch();
  const musicPlayer = useSelector<RootState>((state) => state.player);


  const onClickPlay = () => {
    dispatch(setPlayerMusic({
      isPlaying: false,
      name: `${name} - ${singer}`,
      music: music
    }))


    setTimeout(() => {
      dispatch(setPlay(true))
    }, 200);

  }

  return (
    <div className={classes.musicCard}>
      <div className={classes.musicCard__image}>
        <button className={classes.musicCard__icon}>
          <AiOutlinePlayCircle onClick={onClickPlay} />
        </button>
        <Image layout='fill' alt={singer} src={image} />
      </div>
      <div className={classes.musicCard__content}>
        <h1>{name}</h1>
        <p className={classes.musicCard__content__musician}>{singer}</p>
      </div>
    </div>
  )
}

export default React.memo(MusicCard)