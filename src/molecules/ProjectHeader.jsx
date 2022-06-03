import { Link } from "react-router-dom";

export default function ProjectHeader({ id, acronym, subtitle, title }) {
  const projectsHomeUrl = `/projects/${id}`;
  return (
    <div id="project_header">
      <h1
        className="title"
        id="project_header_title_acronym"
        data-testid="project_header_title_acronym"
      >
        <Link to={projectsHomeUrl}>{`${title} (${acronym})`}</Link>
      </h1>
      <h2
        className="subtitle"
        id="project_header_subtitle"
        data-testid="project_header_subtitle"
      >
        {subtitle}
      </h2>
    </div>
  );
}
