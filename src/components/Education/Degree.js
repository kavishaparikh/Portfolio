import React from "react";

import { useSelector } from "react-redux";
import EducationData from "../../Data/EducationData";
import classes from "./degree.module.css";

function Degree(props) {
  const uiColor = useSelector((state) => state.uiColor);
  const nonThemeColor = useSelector((state) => state.nonThemeColor);

  return (
    <div className={classes.degreeMain}>
      <h1 style={{ color: nonThemeColor }}>Education</h1>
      <div className={classes.degreeCard}>
        {/* <div className={`${classes.degreeImage} centered`} style={{borderColor:uiColor}}>
                    <img src={UniversityImg} alt="degree" srcset="" />
                </div> */}
        <div className={classes.degreeWrapper}>
          {EducationData.map((EducationData) => (
            <div className={classes.degreeInfo}>
              {/* <li className={classes.details}> */}
              <h1 style={{ color: uiColor }}>{EducationData.collegeName}</h1>
              <h2 style={{ color: nonThemeColor }}>
                {EducationData.courseName}
              </h2>
              <h3>{EducationData.couseLocation}</h3>
              {/* </li> */}
            </div>
          ))}

          {/* <ul className={classes.details}>
            {EducationData.details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Degree;
