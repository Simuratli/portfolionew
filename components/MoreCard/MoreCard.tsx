import React from 'react';
import { MoreCardPropTypes } from './MoreCard.types';
import Heading from '../Heading';
import Link from 'next/link';
import Image from 'next/image';
import classes from '../../styles/containers/more.module.scss';

function MoreCard({ link, image, text }: MoreCardPropTypes) {
  return (
    <Link href={link}>
      <div className={classes.more__card}>
        <div className={classes.more__card__image}>
          <Image layout='fill' alt='covers' src={image} />
        </div>
        <div className={classes.more__card__footer}>
          <Heading type='small'>{text}</Heading>
        </div>
      </div>
    </Link>
  );
}

export default MoreCard;
