import React from 'react';
import { useRouter } from 'next/router';
import classes from '../../styles/containers/articles.module.scss';
import { Heading } from '../../components';

function ArticleItself() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={classes.individual__article}>
      <Heading type='big'>Post: {slug}</Heading>
    </div>
  );
}

export default ArticleItself;
