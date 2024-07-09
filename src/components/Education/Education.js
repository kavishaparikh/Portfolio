import React, { Fragment } from "react";

import Experience from "../Experience/Experience";
import Degree from "./Degree";

function Education() {
  //   const nonThemeColor = useSelector((state) => state.nonThemeColor);
  //   const uiColor = useSelector((state) => state.uiColor);

  //   const languagesDone = EducationData.codingStatus;
  return (
    <Fragment>
      <div id="experience">
        <Experience />
        <Degree />
      </div>
    </Fragment>
  );
}
export default Education;
