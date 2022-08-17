import React from 'react';
import { Heading, Text, MoreCard } from '../../components';
import classes from '../../styles/containers/more.module.scss';

function More() {
  return (
    <div className={classes.more}>
      <Heading type='medium'>🕹️ Want to see more things related with me</Heading>
      <Text text="You can use these cards for reading my articles, seeing my projects, learning my favorite music and books, and more contact information for me." />

      <div className={classes.more__cards}>

        <MoreCard link='/projects' text='📌  Projects' image='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
        <MoreCard link='/articles' text='📄 Articles' image='https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' />
        <MoreCard link='/books' text='📙 Books' image='https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
        <MoreCard link='/musics' text='🎵 Musics' image='https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
        <MoreCard link='/contact' text='📱 Contact' image='https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />

      </div>

    </div>
  )
}

export default More