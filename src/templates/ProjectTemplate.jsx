import ControlsCompleted from "../molecules/CompletedControls";
import ComponentsList from "../organisms/ComponentsList";
import ProjectHeader from "../molecules/ProjectHeader";

export function ProjectTemplate({ project }) {
  const componentList = [
    { id: 1, name: "first component" },
    { id: 2, name: "second component" },
  ];
  const { id, acronym, impact_level, title } = project;

  return (
    <div>
      <ProjectHeader
        id={id}
        acronym={acronym}
        impactLevel={impact_level}
        title={title}
      />
      <ControlsCompleted />
      <h3>Components</h3>
      <ComponentsList componentList={componentList} />
      {/* Possibly move export to cfacts as a molecule if it is reused elsewhere */}
      <h3>Export to CFACTS</h3>
      <p>
        Once you're finished with your control narratives, export them to upload
        to CFACTS.
      </p>
      <button className="usa-button">Export Control Narratives</button>
    </div>
  );
}
