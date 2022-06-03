import ProjectHeader from "../molecules/ProjectHeader";
import { URL_CFACTS } from "../constants";

export function ProjectSettingsTemplate({ project }) {
  const { id, acronym, impact_level, location, title } = project;
  const subtitle = "Project Settings";
  return (
    <div className="project-page">
      <ProjectHeader
        id={id}
        acronym={acronym}
        subtitle={subtitle}
        title={title}
      />
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
      <div className="button-section">
        <div className="above-button-text">
          Update your FISMA Impact Level in CFACTS
        </div>
        <a href={URL_CFACTS}>
          <button className="usa-button">Go to CFACTS</button>
        </a>
      </div>
    </div>
  );
}
