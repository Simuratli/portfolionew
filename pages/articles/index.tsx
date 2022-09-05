import React from 'react';
import { Avatar, Heading, MoreCard } from '../../components';
import classes from '../../styles/containers/articles.module.scss';

function Articles() {
  return (
    <div className={classes.articles}>
      <Avatar image={require('../../public/assets/avatar/projects.png')} />
      <Heading type='big'>My Projects</Heading>
      <div className={classes.articles__content}>
        <MoreCard link='/articles/articles1' text='📌  Dublicate checker' image='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
        <MoreCard link='/articles/articles1' text='📌  Dublicate checker' image='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
        <MoreCard link='/articles/articles11' text='📌  Dublicate checker' image='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
        <MoreCard link='/articles/articles1' text='📌  Dublicate checker' image='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
        <MoreCard link='/articles/articles1' text='📌  Dublicate checker' image='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
        <MoreCard link='/articles/articles1' text='📌  Dublicate checker' image='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
      </div>
    </div>
  )
}

export default Articles