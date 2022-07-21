import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const { id, acronym, title } = project;
  const projectUrl = `/projects/${id}`;
  const componentsUrl = `${projectUrl}/components`;
  const controlsUrl = `${projectUrl}/controls`;
  const settingsUrl = `${projectUrl}/settings`;

  return (
    <div className="project-card" data-testid="project_card">
      <div>
        <div className="card-title">
          {title} ({acronym})
        </div>
        <div className="links-list">
          <Link to={componentsUrl}>Manage Components</Link>
          <br />
          <Link to={controlsUrl}>View Controls</Link>
          <br />
          <Link to={settingsUrl}>View Settings</Link>
          <br />
        </div>
        <Link to={projectUrl}>
          <button className="usa-button">View Project</button>
        </Link>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    acronym: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
