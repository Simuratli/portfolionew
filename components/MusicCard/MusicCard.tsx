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
      music: "https://github.com/Simuratli/portfolionew/blob/main/public/music/%5BLYRICS%5D%20'Best%20Friend'%20-%20Saweetie%20(feat.%20Doja%20Cat,%20Jamie%20&%20CHANMINA)%20__%20Color%20Coded%20Lyrics.mp3?raw=true"
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