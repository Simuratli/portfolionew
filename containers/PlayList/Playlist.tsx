import React from 'react';
import { MusicCard } from '../../components';
import { useSelector } from 'react-redux';
import { fakeMusicPlayer } from './fakeData';

function Playlist() {

  const state = useSelector((state: any) => state.counter)
  return (
    <div>

      {
        fakeMusicPlayer.map((item) => {
          return <MusicCard key={item.name} singer={item.author} name={item.name} image={item.image} music={item.music} />
        })
      }
    </div>
  )
}

export default Playlist