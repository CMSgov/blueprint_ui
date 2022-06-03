import ProjectHeader from "../molecules/ProjectHeader";

export function ProjectSettingsTemplate({ project }) {
  const { acronym, impact_level, location, title } = project;
  const subtitle = "Project Settings";
  return (
    <div className="project-page">
      <ProjectHeader acronym={acronym} subtitle={subtitle} title={title} />
      <div className="settings-description measure-2">
        Need to update your system information? Review your answers here to
        suggest System Components.
      </div>
      <div id="project_details_section" className="settings-details-section">
        <p data-testid="project_details_location">
          <span className="question">
            Where is this system going to be located?
          </span>
          <br />
          {location}
        </p>
        <p data-testid="project_details_impact_level">
          <span className="question">
            What is the FISMA Impact level of this system?
          </span>
          <br />
          {impact_level}
        </p>
      </div>
    </div>
  );
}
