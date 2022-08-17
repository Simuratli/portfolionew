import React from 'react';
import { Heading, Badge } from '../../components';
import classes from '../../styles/containers/resume.module.scss';
import { resumeData } from './resumeData';

function Resume() {
  return (
    <div className={classes.resume}>
      <div className={classes.resumeHead}>
        <Heading type="medium">💼 Resume</Heading>
      </div>
      {
        resumeData.map((resume, index) => {
          return <div key={index} className={classes.resumeListItem}>
            <div className={classes.resumeListItem__name}><Heading type="small">{resume.title}</Heading></div>
            <div className={classes.resumeListItem__badges}>
              {
                resume.badges.map((badge, idx) => {
                  return <Badge key={idx} text={badge.title} color={badge.color} />
                })
              }
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Resume