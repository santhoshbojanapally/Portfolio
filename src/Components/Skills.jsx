import obj from "../Data/SkillsList.js";
import "../stylesheets/skills.css";
import Skillslist from "./Skillslist.jsx";

function Skills() {
  return (
    <section id="Skills" className="section skills-section">
      <h2 className="heading text-4xl">Technical Skills</h2>

      <div className="skillsTray">
        <Skillslist List={obj.Languages} />
        <Skillslist List={obj.Frameworks} />
        <Skillslist List={obj.Databases} />
        <Skillslist List={obj.Tools} />
      </div>
    </section>
  );
}

export default Skills;
