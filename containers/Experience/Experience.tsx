import React, { useEffect } from "react";
import { Heading, ExperienceCard } from "../../components";
import classes from "../../styles/containers/experience.module.scss";
import { useExperience } from "../../hooks/DashboardHooks/useExperience";
import { useTypedSelector } from "../../hooks/useTypedSelector";

function Experience() {
  const { getWorkPlacesData } = useExperience();
  const ExperienceState = useTypedSelector((state) => state.experience.data);
  useEffect(() => {
    getWorkPlacesData();
  }, []);

  return (
    <div className={classes.experience}>
      <Heading type="medium">👨‍💻 Work experience</Heading>
      {ExperienceState.map((exp) => (
        <ExperienceCard
          key={exp.id}
          title={exp.title}
          whereRed={exp.company}
          where={`, ${exp.placeAndTime}`}
          text={exp.description}
        />
      ))}
    </div>
  );
}

export default Experience;
