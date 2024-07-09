import React from "react";

import classes from "./Experience.module.css";
import CreateExperience from "./CreateExperience";
import ExperienceData from "../../Data/ExperienceData";
import { useSelector } from "react-redux";
const Experience = () => {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  let experienceList = ExperienceData.experienceList;

  return (
    <React.Fragment>
      <h1 style={{ color: nonThemeColor }}>Experience</h1>
      <div className={classes.certificateCard}>
        {experienceList.map((item, index) => {
          return <CreateExperience key={index} item={item} />;
        })}
      </div>
    </React.Fragment>
  );
};
export default Experience;
