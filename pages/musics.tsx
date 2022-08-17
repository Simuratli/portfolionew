import React from 'react';
import { Avatar, AudioPlayer, Heading } from '../components';

function Music() {
  return (
    <div>
      <Avatar image={require('../public/assets/avatar/music.png')} />
      <Heading type='big'>My Favorite Musics</Heading>
      <AudioPlayer />
    </div>
  )
}

export default Music