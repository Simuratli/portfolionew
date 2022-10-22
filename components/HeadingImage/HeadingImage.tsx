import React from 'react';
import Image from 'next/image';
import classes from '../../styles/components/headingimage.module.scss';
import Ghibli from '../../public/assets/header/ghibli.jpg';

function HeadingImage() {
  return (
    <div className={classes.headImage}>
      <Image layout='fill' alt='Header image' src={Ghibli} />
    </div>
  );
}

export default React.memo(HeadingImage);
