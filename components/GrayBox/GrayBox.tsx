import React from "react";
import classes from "../../styles/components/graybox.module.scss";
import { GrayBoxPropTypes } from "./GrayBox.types";

function GrayBox({ children }: GrayBoxPropTypes) {
  return (
    <div
      className={classes.graybox}
      dangerouslySetInnerHTML={{ __html: typeof children === 'string' ? children : 'Error' }}
    />
  );
}

export default React.memo(GrayBox);
