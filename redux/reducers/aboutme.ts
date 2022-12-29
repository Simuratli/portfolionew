import { createSlice } from "@reduxjs/toolkit";

export interface audioReducerType {
  name: string;
  age: number;
  experience: string;
  workPlace: string;
  title: string;
  currentlyLearning: string;
  aboutMe: string | number | readonly string[] | undefined;
}

const aboutMeReducer = createSlice({
  name: "aboutme",

  initialState: {
    name: "Eljan Simuratli",
    age: 24,
    experience: "4 years",
    workPlace: "UDS Systems",
    title: "Front end developer",
    currentlyLearning: "CI/CD",
    aboutMe: undefined,
  } as audioReducerType,

  reducers: {
    setName: (state: audioReducerType, action) => {
      state.name = action.payload;
    },
    setAge: (state: audioReducerType, action) => {
      state.age = action.payload;
    },
    setExperience: (state: audioReducerType, action) => {
      state.experience = action.payload;
    },
    setWorkPlace: (state: audioReducerType, action) => {
      state.workPlace = action.payload;
    },
    setTitle: (state: audioReducerType, action) => {
      state.title = action.payload;
    },
    setCurrentlyLearning: (state: audioReducerType, action) => {
      state.currentlyLearning = action.payload;
    },
    setAboutMe: (state: audioReducerType, action) => {
      state.aboutMe = action.payload;
    },
    setAll: (state: audioReducerType, action) => {
      state.aboutMe = action.payload.aboutMe;
      state.currentlyLearning = action.payload.currentlyLearning;
      state.title = action.payload.title;
      state.workPlace = action.payload.workPlace;
      state.experience = action.payload.experience;
      state.age = action.payload.age;
      state.name = action.payload.name;
    },
  },
});

export const {
  setAboutMe,
  setAge,
  setCurrentlyLearning,
  setExperience,
  setName,
  setTitle,
  setWorkPlace,
  setAll,
} = aboutMeReducer.actions;

export default aboutMeReducer.reducer;
