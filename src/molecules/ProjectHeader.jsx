export default function ProjectHeader({ acronym, subtitle, title }) {
  return (
    <div id="project_header">
      <h1
        className="title"
        id="project_header_title_acronym"
        data-testid="project_header_title_acronym"
      >
        {`${title} (${acronym})`}
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
