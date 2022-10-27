import React, { useState } from 'react';
import { useTypedSelector } from '../useTypedSelector'
import { useDispatch } from 'react-redux'
import { getDatabase, ref, set, child, get } from "firebase/database";
import { setName, setAboutMe, setAll, setAge, setCurrentlyLearning, setExperience, setTitle, setWorkPlace } from '../../redux/reducers/aboutme';

export function useAboutMe() {
  const dispatch = useDispatch();
  const aboutMeState = useTypedSelector(state => state.aboutMe);

  const [saved, setSaved] = useState(false)




  const getAboutMeData = async () => {
    const dbRef = await ref(getDatabase());
    const snapshot = await get(child(dbRef, `about/`));
    if (snapshot.exists()) {
      dispatch(setAll(snapshot.val()))
    } else {
      console.log("No data available");
    }
  }



  const handleSaveButton = async () => {
    const db = getDatabase();
    set(ref(db, 'about/'), aboutMeState);
    setSaved(true);

    setTimeout(() => {
      setSaved(false)
    }, 1500);

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        dispatch(setName(value))
        break;
      case 'age':
        dispatch(setAge(value))
        break;
      case 'currentlyLearning':
        dispatch(setCurrentlyLearning(value))
        break;
      case 'experience':
        dispatch(setExperience(value))
        break;
      case 'title':
        dispatch(setTitle(value))
        break;
      case 'workPlace':
        dispatch(setWorkPlace(value))
        break;
      case 'aboutMe':
        dispatch(setAboutMe(value))
        break;
      default:
        break;
    }
  }

  return {
    handleSaveButton,
    handleChange,
    saved,
    getAboutMeData
  }
}