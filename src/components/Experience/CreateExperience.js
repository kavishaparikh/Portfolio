import React from "react";
import { useSelector } from "react-redux";

import ThemeData from "../../Data/ThemeData";
import Button from "../UI/Button";
import classes from "./createExperience.module.css";

const CreateExperience = (props) => {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const uiColor = useSelector((state) => state.uiColor);

  const activeMode = useSelector((state) => state.mode);
  let certBgColor;
  if (activeMode === "light") {
    certBgColor = ThemeData.certBgLight;
  } else {
    certBgColor = ThemeData.certBgDark;
  }

  return (
    <div className={classes.certificate} style={{ borderColor: uiColor }}>
      <div className={classes.Overlay}>
        <div className={classes.overlayLink}>
          <a
            href={props.item.link}
            id="overlay-text"
            target="_blank noreferrer"
          >
            <Button> View LinkedIn</Button>
          </a>
        </div>
      </div>
      <div className={classes.certBody}>
        <div
          className={classes.certImage}
          style={{ color: nonThemeColor, backgroundColor: certBgColor }}
        >
          {props.item.company}
        </div>
        <div className={classes.certInfo}>
          <h1 style={{ color: nonThemeColor }}>{props.item.position}</h1>
          <h2 style={{ color: uiColor }}>{props.item.time}</h2>
        </div>
      </div>
      <div className={classes.description}>
        <ul>
          {props.item.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default CreateExperience;
