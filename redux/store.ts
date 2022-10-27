import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './reducers/audio'
import aboutMeReducer from './reducers/aboutme'
import experienceReducer from './reducers/experience'

export const store = configureStore({
  reducer: {
    player: playerReducer,
    aboutMe: aboutMeReducer,
    experience: experienceReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;