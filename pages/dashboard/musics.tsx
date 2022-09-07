import React from 'react';
import { Heading, Toggle } from '../../components';
import classes from '../../styles/containers/music.module.scss';
import { AiOutlineDelete } from 'react-icons/ai';

function musics() {
  return (
    <div className="without_avatar">
      <Heading type="big">Music</Heading>
      <br />
      <br />
      <Toggle header="Musics in Database">
        <div className={classes.musiclist}>
          <div className={classes.musiclistdb}>
            <p>Music 1</p>
            <AiOutlineDelete />
          </div>
          <div className={classes.musiclistdb}>
            <p>Music 1</p>
            <AiOutlineDelete />
          </div>
          <div className={classes.musiclistdb}>
            <p>Music 1</p>
            <AiOutlineDelete />
          </div>
        </div>
      </Toggle>
    </div>
  );
}

export default React.memo(musics);
