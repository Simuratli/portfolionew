import React, { useEffect } from 'react';
import Image from 'next/image';
import classes from '../../styles/components/musiccard.module.scss';
import { MusicCardPropTypes } from './MusicCard.types';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
import { setPlayerMusic } from '../../redux/reducers/audio';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';

function MusicCard({ image, singer, name }: MusicCardPropTypes) {
  const dispatch = useDispatch();
  const musicPlayer = useSelector<RootState>((state) => state.player);


  useEffect(() => {
    console.log(musicPlayer, 'musicPlayer')
  }, [musicPlayer])


  const onClickPlay = () => {
    dispatch(setPlayerMusic({
      isPlaying: true,
      name: "I like to move it",
      music: "https://github.com/Simuratli/portfolionew/blob/eba14f218cfc898ffcad147af50fbf3286ebab12/public/music/%5BAMV%5D%20SUPER%20RISER!%20%E3%80%8CDo%20You%20Remember%20Love.mp3?raw=true"
    }))
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