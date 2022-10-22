import React from 'react';
import { Heading, Badge } from '../../components';
import classes from '../../styles/containers/resume.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ResumeItem from './ResumeListItem';

function Resume() {
  const aboutState = useTypedSelector(state => state.aboutMe)
  return (
    <div className={classes.resume}>
      <div className={classes.resumeHead}>
        <Heading type="medium">💼 Resume</Heading>
      </div>
      <ResumeItem title={'📄 Full Name'} badge={aboutState.name} color={'rgba(105, 64, 165, 0.3)'} />
      <ResumeItem title={'🌌 Age'} badge={aboutState.age} color={'rgba(143, 142, 138, 0.5)'} />
      <ResumeItem title={'⚗️ Experience'} badge={aboutState.experience} color={'rgba(184, 70, 63, 0.3)'} />
      <ResumeItem title={'🏬 Work place'} badge={aboutState.workPlace} color={'rgba(11, 110, 153, 0.3)'} />
      <ResumeItem title={'🔍 Title'} badge={aboutState.title} color={'rgba(223, 172, 3, 0.3)'} />
      <ResumeItem title={'📘 Currently Learning'} badge={aboutState.currentlyLearning} color={'rgba(105, 64, 165, 0.3'} />
    </div>
  )
}

export default Resume