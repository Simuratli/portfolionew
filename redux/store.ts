import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./reducers/audio";
import aboutMeReducer from "./reducers/aboutme";
import experienceReducer from "./reducers/experience";
import contactReducer from "./reducers/contact";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    aboutMe: aboutMeReducer,
    experience: experienceReducer,
    contact: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
