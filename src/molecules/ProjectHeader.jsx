import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProjectHeader({
  id,
  acronym,
  impactLevel,
  subtitle,
  title,
}) {
  const projectHomeUrl = `/projects/${id}`;
  const projectSettingsUrl = projectHomeUrl + "/settings";
  return (
    <div className="project-header" id="project_header">
      <h1
        className="title"
        id="project_header_title_acronym"
        data-testid="project_header_title_acronym"
      >
        <Link to={projectHomeUrl}>{`${title} (${acronym})`}</Link>
      </h1>
      {impactLevel && (
        <div
          className="impact-level"
          id="project_header_impact_level"
          data-testid="project_header_impact_level"
        >
          FISMA Impact Level: {impactLevel}
          <Link
            to={projectSettingsUrl}
            className="gear-link"
            data-testid="gear_link"
          >
            <img src="/gear.svg" alt="link to project settings page" />
          </Link>
        </div>
      )}
      {subtitle && (
        <h2
          className="subtitle"
          id="project_header_subtitle"
          data-testid="project_header_subtitle"
        >
          {subtitle}
        </h2>
      )}
    </div>
  );
}

ProjectHeader.propTypes = {
  id: PropTypes.number.isRequired,
  acronym: PropTypes.string.isRequired,
  impactLevel: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};
