import React from "react";

import Card from "../UI/Card";
import classes from "./ProjectItem.module.css";

import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import { useSelector } from "react-redux";

const ProjectItem = (props) => {
  const uiColor = useSelector((state) => state.uiColor);
  const nonThemeColor = useSelector((state) => state.nonThemeColor);

  let description = props.project.description;
  if (description === "") {
    description = " project description";
  }
  if (description.length > 120) {
    description = description.substr(0, 120);
    description = description + " ... ";
  }

  return (
    <Card className={classes.projectItem}>
      <h2 style={{ color: uiColor }}>{props.project.projectTitle}</h2>
      <p className={classes.description}>{description}</p>
      <div className={classes.controls}>
        <div className={classes.projectLink}>
          <a
            target="_blank"
            rel="noreferrer"
            href={props.project.sourceLink}
            style={{ color: nonThemeColor }}
          >
            <LinkRoundedIcon fontSize="large" />
          </a>
        </div>
      </div>
    </Card>
  );
};
export default ProjectItem;
