import React from 'react'
import { Heading } from '../../../components';
import classes from '../../../styles/containers/experience.module.scss'

function Experience() {
  return (
    <div>
      <Heading type="big">
        <br />
        <div className={classes.experience__heading}>
          <span>👨‍💻 Work experience</span>
          <button className={classes.experience__add}>+</button>
        </div>
        <br />
      </Heading>
    </div>
  )
}

export default Experience