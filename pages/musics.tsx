import React from 'react';
import { Avatar, AudioPlayer, Heading } from '../components';
import { Playlist } from '../containers';

function Music() {
  return (
    <div>
      <Avatar image={require('../public/assets/avatar/music.png')} />
      <Heading type='big'>🎵 My Favorite Musics</Heading>
      <br />
      <br />
      <Playlist />
      <AudioPlayer />
    </div>
  )
}

export default Music