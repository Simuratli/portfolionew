import React from "react";
import classes from "../../styles/components/heading.module.scss";
import { HeadingPropTypes } from "./Heading.types";

function Heading({ children, type }: HeadingPropTypes) {
  return <h1 className={`${classes.heading} ${classes[type]}`}>{children}</h1>;
}

export default React.memo(Heading);
