import React from 'react';
import { MusicCard } from '../../components';
import { useSelector } from 'react-redux'

function Playlist() {

  const state = useSelector((state: any) => state.counter)
  console.log(state)
  return (
    <div>
      <MusicCard singer="SUPER RISER" name='Do you remember Love?' image='https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
      <MusicCard singer="SUPER RISER" name='Do you remember Love?' image='https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
      <MusicCard singer="SUPER RISER" name='Do you remember Love?' image='https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
      <MusicCard singer="SUPER RISER" name='Do you remember Love?' image='https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
    </div>
  )
}

export default Playlist