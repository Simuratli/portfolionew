
export interface ChapterTypes {
  start: number;
  end: number
}

export interface AudioChapterComponentPropTypes {
  chapters: ChapterTypes[];
  duration: number
}