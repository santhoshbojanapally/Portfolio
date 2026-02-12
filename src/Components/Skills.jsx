import obj from "../Data/SkillsList.js";
import "../stylesheets/skills.css";
import Skillslist from "./Skillslist.jsx";

function Skills() {
  return (
    <div id="Skills" className="section">
      <div>
        <h2 className="section text-4xl heading">Skills</h2>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <div className="skillsTray">
            <Skillslist List={obj.Languages} />
            <Skillslist List={obj.Frameworks} />
            <Skillslist List={obj.Databases} />
            <Skillslist List={obj.Tools} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
