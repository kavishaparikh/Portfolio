import React from "react";

import ProjectsData from "../../Data/ProjectsData";
import ProjectItem from "./ProjectItem";
import styles from "./project.module.css";

import { useSelector } from "react-redux";
import ProgrammingSkills from "../Professional Skillset/ProgrammingSkills";

const Projects = (props) => {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  let projects = ProjectsData.DUMMY_PROJECTS;
  return (
    <div id="projects">
      <ProgrammingSkills />
      <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>
        My Projects
      </h1>
      <div className={styles.projectList}>
        {projects.map((item, index) => {
          return <ProjectItem key={index} project={item} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
