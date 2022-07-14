import ControlsCompleted from "../molecules/CompletedControls";
import ComponentsList from "../organisms/ComponentsList";
import ProjectHeader from "../molecules/ProjectHeader";
import { Tooltip } from "@trussworks/react-uswds";

export function ProjectTemplate({ project }) {
  const { id, acronym, impact_level, title } = project;
  const sspUrl = "/projects/" + { id } + "/system-security-plan";
  return (
    <div>
      <ProjectHeader
        id={id}
        acronym={acronym}
        impactLevel={impact_level}
        title={title}
      />
      <ControlsCompleted />
      {/*@TODO: tooltip is not dispaying correctly <Tooltip className="blueprint-tooltip" position="right" label="System components are group(s) of control narratives that help you create your System Security Plan faster. Components align with your system's architecture, policies and procedures." /> */}
      {/*@TODO: uswds tooltip has to be button <button className="usa-tooltip" data-position="right" data-classes="width-full tablet:width-auto" title="System components are group(s) of control narratives that help you create your System Security Plan faster. Components align with your system's architecture, policies and procedures.">icon</button> */}
      <h3>System Components</h3>
      <p>
        Add, remove, or create new components to match your system architecture,
        policies, and procedures and help complete your System Security Plan.{" "}
      </p>
      <button className="usa-button usa-button--outline">
        Manage System Components
      </button>
      <h3>Export to CFACTS</h3>
      <p>
        Once you're finished with your control narratives, export them to upload
        to CFACTS.
      </p>
      <a href={sspUrl}>
        <button className="usa-button usa-button--outline">
          Export Control Narratives
        </button>
      </a>
    </div>
  );
}
