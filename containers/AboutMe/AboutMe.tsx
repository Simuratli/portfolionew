import React from 'react'
import { Heading, Input, TextEditor, Button } from '../../components';
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { setName, setAboutMe, setAge, setCurrentlyLearning, setExperience, setTitle, setWorkPlace } from '../../redux/reducers/aboutme';
import sanitizeHtml from 'sanitize-html';


function AboutMe() {
  const dispatch = useDispatch();
  const aboutMeState = useTypedSelector(state => state.aboutMe);


  const sanitizeConf = {
    allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'h1'],
    allowedAttributes: { a: ['href'] },
  };

  const sanitize = () => {

    // dispatch(setAboutMe(sanitizeHtml(aboutMeState.aboutMe, sanitizeConf)))
  };

  return (
    <div>
      <Heading type="big">
        <>Data&apos;s for Home page</>
      </Heading>
      <br />
      <br />
      <Input
        placeholder="Name"
        label="Name"
        onChange={(e) => { dispatch(setName(e.target.value)) }}
        type="text"
        value={aboutMeState.name}
      />
      <Input
        placeholder="Age"
        label="Age"
        onChange={(e) => { dispatch(setAge(e.target.value)) }}
        type="text"
        value={aboutMeState.age}
      />
      <Input
        placeholder="Experience"
        label="Experience"
        onChange={(e) => { dispatch(setExperience(e.target.value)) }}
        type="text"
        value={aboutMeState.experience}
      />
      <Input
        placeholder="Work place"
        label="Work place"
        onChange={(e) => { dispatch(setWorkPlace(e.target.value)) }}
        type="text"
        value={aboutMeState.workPlace}
      />
      <Input
        placeholder="Title"
        label="Title"
        onChange={(e) => { dispatch(setTitle(e.target.value)) }}
        type="text"
        value={aboutMeState.title}
      />
      <Input
        placeholder="Currently Learning"
        label="Currently Learning"
        onChange={(e) => { dispatch(setCurrentlyLearning(e.target.value)) }}
        type="text"
        value={aboutMeState.currentlyLearning}
      />
      <TextEditor sanitize={sanitize} value={aboutMeState.aboutMe} onChange={(e) => { dispatch(setAboutMe(e.target.value)) }} />
      <br />
      <Button text='Save About Me' />
    </div>
  )
}

export default AboutMe