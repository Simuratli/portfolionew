import React from "react";
import classes from "../../styles/components/progress.module.scss";

const ProgressBar = ({ completed }: { completed: number }) => {
  return (
    <div className={classes.progress}>
      <div
        style={{ width: completed }}
        className={classes.progress__filler}
      ></div>
    </div>
  );
};

export default ProgressBar;
