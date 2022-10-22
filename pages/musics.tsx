import React from 'react';
import { Avatar, AudioPlayer, Heading } from '../components';
import { Playlist } from '../containers';
import MusicImage from '../public/assets/avatar/music.png';

function Music() {
  return (
    <div>
      <Avatar image={MusicImage} />
      <Heading type='big'>🎵 My Favorite Music</Heading>
      <br />
      <br />
      <Playlist />
      <AudioPlayer />
    </div>
  );
}

export default React.memo(Music);
