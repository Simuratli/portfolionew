import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './reducers/audio'
import aboutMeReducer from './reducers/aboutme'

export const store = configureStore({
  reducer: {
    player: playerReducer,
    aboutMe: aboutMeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;