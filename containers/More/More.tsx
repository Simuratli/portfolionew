import React from 'react';
import { Heading, Text, MoreCard } from '../../components';
import classes from '../../styles/containers/more.module.scss';
import { MoreContainerPropTypes } from './More.Types';


function More({ headerTitle, subHeaderTitle, data }: MoreContainerPropTypes) {
  return (
    <div className={classes.more}>
      <Heading type='medium'>{headerTitle}</Heading>
      <Text text={subHeaderTitle} />
      <div className={classes.more__cards}>
        {
          data && data.map((more) => {
            return <MoreCard key={more.link} link={more.link} text={more.text} image={more.image} />
          })
        }
      </div>
    </div>
  )
}

export default More