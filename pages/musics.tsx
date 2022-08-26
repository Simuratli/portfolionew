import React, { useState, useEffect } from 'react';
import { Avatar, AudioPlayer, Heading } from '../components';
import { Playlist } from '../containers';
import { useSelector } from 'react-redux';
import { audioReducerType } from '../redux/reducers/audio';
import { RootState } from '../redux/store';

function Music() {

  const musicPlayer = useSelector<RootState, audioReducerType>((state) => state.player);

  return (
    <div>
      <Avatar image={require('../public/assets/avatar/music.png')} />
      <Heading type='big'>🎵 My Favorite Music</Heading>
      <br />
      <br />
      <Playlist />
      <AudioPlayer />
    </div>
  )
}

export default React.memo(Music)