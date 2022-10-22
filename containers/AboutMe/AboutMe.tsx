import React from 'react'
import { Heading, Input, TextEditor, Button } from '../../components';
import { useAboutMe } from '../../hooks/DashboardHooks/useAboutMe'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ButtonColorEnum } from '../../utils/global.types';

function AboutMe() {
  const { addAboutMeText, handleSaveButton, handleChange, saved } = useAboutMe();
  const aboutMeState = useTypedSelector(state => state.aboutMe);


  return (
    <div>
      <Heading type="big">
        <>Data&apos;s for Home page</>
      </Heading>
      <br />
      <br />
      <Input
        name='name'
        placeholder="Name"
        label="Name"
        onChange={handleChange}
        type="text"
        value={aboutMeState.name}
      />
      <Input
        name='age'
        placeholder="Age"
        label="Age"
        onChange={handleChange}
        type="text"
        value={aboutMeState.age}
      />
      <Input
        name='experience'
        placeholder="Experience"
        label="Experience"
        onChange={handleChange}
        type="text"
        value={aboutMeState.experience}
      />
      <Input
        name='workPlace'
        placeholder="Work place"
        label="Work place"
        onChange={handleChange}
        type="text"
        value={aboutMeState.workPlace}
      />
      <Input
        name='title'
        placeholder="Title"
        label="Title"
        onChange={handleChange}
        type="text"
        value={aboutMeState.title}
      />
      <Input
        name='currentlyLearning'
        placeholder="Currently Learning"
        label="Currently Learning"
        onChange={handleChange}
        type="text"
        value={aboutMeState.currentlyLearning}
      />
      <TextEditor name="aboutMe" sanitize={addAboutMeText} value={aboutMeState.aboutMe} onChange={handleChange} />
      <br />
      <Button color={saved ? ButtonColorEnum.Success : ButtonColorEnum.Black} onClick={handleSaveButton} text={saved ? "Saved" : 'Save About Me'} />
    </div>
  )
}

export default AboutMe