import ProjectHeader from "../molecules/ProjectHeader";

export function ProjectSettingsTemplate({ project }) {
  const { title, acronym, impact_level } = project;
  const subtitle = "Project Settings";
  return (
    <div className="project-page">
      <ProjectHeader
        acronym={acronym}
        subtitle={subtitle}
        title={project.title}
      />
      <div className="settings-description measure-2">
        Need to update your system information? Review your answers here to
        suggest System Components.
      </div>
      <div className="settings-about-section">
        <p>
          <span className="question">What is the name of the system?</span>
          <br />
          {`${title} (${acronym})`}
        </p>
        <p>
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
