import { createSlice } from '@reduxjs/toolkit';
import { Interface } from 'readline';


export interface audioReducerType {
  music: string;
  isPlaying: boolean;
  name: string;
}

const counterSlice = createSlice({
  name: 'play',

  initialState: {
    music: 'https://github.com/Simuratli/portfolionew/blob/eba14f218cfc898ffcad147af50fbf3286ebab12/public/music/%5BAMV%5D%20SUPER%20RISER!%20%E3%80%8CDo%20You%20Remember%20Love.mp3?raw=true',
    isPlaying: false,
    name: 'Do you remember Love?'
  },

  reducers: {
    setPlayerMusic: (state: audioReducerType, action) => {
      state.music = action.payload.music;
      state.isPlaying = action.payload.isPlaying
      state.name = action.payload.name
    },

    setPlay: (state: audioReducerType, action) => {
      state.isPlaying = action.payload
    }
  }

})

export const { setPlayerMusic, setPlay } = counterSlice.actions;

export default counterSlice.reducer