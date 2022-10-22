import React from 'react';
import Heading from '../Heading';
import classes from '../../styles/containers/experience.module.scss';
import { ExperienceCardPropTypes } from './Experience.types';

function ExperienceCard({ title, where, whereRed, text }: ExperienceCardPropTypes) {
  return (
    <div className={classes.experience__card}>
      <Heading type='small'>{title}</Heading>
      <p className={classes.experience__card__job}>
        <span className='red italic'>{whereRed}</span>
        {where}
      </p>
      <p className={classes.experience__card__duty}>{text}</p>
    </div>
  );
}

export default ExperienceCard;
