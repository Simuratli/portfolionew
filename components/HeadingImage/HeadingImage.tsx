import React from 'react';
import Image from 'next/image';
import classes from '../../styles/components/headingimage.module.scss'

function HeadingImage() {
  return (
    <div className={classes.headImage}>
      <Image layout='fill' alt='Header image' src={require('../../public/assets/header/japan.png')} />
    </div>
  )
}

export default React.memo(HeadingImage)