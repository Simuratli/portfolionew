import React from "react";
import classes from "../../../styles/components/audioplayer.module.scss";
import { AudioChapterComponentPropTypes } from "../AudioPlayer.types";

function Chapters({ chapters, duration }: AudioChapterComponentPropTypes) {
  return (
    <>
      {chapters.map((chapter, index) => {
        const leftStyle = (chapter.start / duration) * 100;
        const widthStyle = ((chapter.end - chapter.start) / duration) * 100;
        return (
          <div
            style={{ left: `${leftStyle}%`, width: `${widthStyle}%` }}
            key={index}
            className={`${classes.chapter} ${
              chapter.start === 0 && classes.start
            } ${chapter.end === duration && classes.end}`}
          ></div>
        );
      })}
    </>
  );
}

export default Chapters;
