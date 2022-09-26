import { Link, useLocation } from "react-router-dom";
import ControlsCompleted from "../molecules/ControlsCompleted";
import ProjectHeader from "../molecules/ProjectHeader";

export function ProjectTemplate({ project }) {
  const {
    id,
    acronym,
    completed_controls,
    impact_level,
    title,
    total_controls,
  } = project;
  const params = useLocation();
  const manageComponentsUrl = params.pathname + "/components";
  const sspUrl = params.pathname + "/system-security-plan";

  return (
    <div className="project-page">
      <ProjectHeader
        id={id}
        acronym={acronym}
        impactLevel={impact_level}
        title={title}
      />
      <ControlsCompleted
        numControlsCompleted={completed_controls}
        numControlsTotal={total_controls}
      />
      <div className="section">
        <div className="section-header">System Components</div>
        <p>
          Add, remove, or create new components to match your system
          architecture, policies, and procedures and help complete your System
          Security Plan.
        </p>
        <Link to={manageComponentsUrl}>
          <button className="usa-button usa-button--outline">
            Manage System Components
          </button>
        </Link>
      </div>
      <div className="section">
        <div className="section-header">Export to CFACTS</div>
        <p>
          Once you're finished with your control narratives, export them to
          upload to CFACTS.
        </p>
        <Link to={sspUrl}>
          <button className="usa-button usa-button--outline">
            Export Control Narratives
          </button>
        </Link>
      </div>
    </div>
  );
}
