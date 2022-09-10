import React from 'react';
export interface ChapterTypes {
  start: number;
  end: number;
}

export interface AudioChapterComponentPropTypes {
  chapters: ChapterTypes[];
  duration: number;
}

export interface TimeComponentPropTypes {
  duration: number;
  calculateTime: (sec: number) => string;
  currentTime: number;
}

export interface ProgressBarForMusicPropTypes {
  progressBarRef: React.RefObject<HTMLInputElement>;
  changeRange: () => void;
  duration: number;
}

export interface AudioControlsPropTypes {
  togglePlay: () => void;
  isPlaying: boolean;
}
