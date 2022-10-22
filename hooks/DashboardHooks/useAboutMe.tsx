import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../useTypedSelector'
import { useDispatch } from 'react-redux'
import sanitizeHtml from 'sanitize-html';
import { getDatabase, ref, set, child, get } from "firebase/database";
import { setName, setAboutMe, setAll, setAge, setCurrentlyLearning, setExperience, setTitle, setWorkPlace } from '../../redux/reducers/aboutme';

export function useAboutMe() {
  const dispatch = useDispatch();
  const aboutMeState = useTypedSelector(state => state.aboutMe);

  const [saved, setSaved] = useState(false)

  const sanitizeConf = {
    allowedTags: [
      "address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4",
      "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div",
      "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre",
      "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn",
      "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp",
      "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption",
      "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr"
    ],
    allowedAttributes: { a: ['href'] },
  };


  const getAboutMeData = async () => {
    const dbRef = await ref(getDatabase());
    const snapshot = await get(child(dbRef, `about/`));
    if (snapshot.exists()) {
      console.log(snapshot.val());
      dispatch(setAll(snapshot.val()))
    } else {
      console.log("No data available");
    }
  }

  const addAboutMeText = () => {
    // dispatch(setAboutMe(sanitizeHtml(aboutMeState.aboutMe, sanitizeConf)))
  };


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
    addAboutMeText,
    handleChange,
    saved,
    getAboutMeData
  }
}