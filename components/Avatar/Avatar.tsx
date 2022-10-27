import React from "react";
import Image from "next/image";
import classes from "../../styles/components/avatar.module.scss";
import { AvatarPropTypes } from "./Avatar.types";

function Avatar({ image }: AvatarPropTypes) {
  return (
    <div className={classes.avatar}>
      <Image layout="fill" alt="Eljan Simuratli" src={image} />
    </div>
  );
}

export default React.memo(Avatar);
