import React from "react";
import { Badge, Heading } from "../../components";
import classes from "../../styles/containers/resume.module.scss";
import { ResumeListItemPropType } from "./resume.types";

function ResumeListItem({ title, badge, color }: ResumeListItemPropType) {
  return (
    <div className={classes.resumeListItem}>
      <div className={classes.resumeListItem__name}>
        <Heading type="small">{title}</Heading>
      </div>
      <div className={classes.resumeListItem__badges}>
        <Badge text={badge} color={color} />
      </div>
    </div>
  );
}

export default ResumeListItem;
