export default function ProjectHeader({ acronym, subtitle, title }) {
    return (
        <div className="project-page">
          <h1 className="title">
            {`${title} (${acronym})`}
          </h1>
          <h2 className="subtitle">
            {subtitle}
          </h2>
        </div>
      )
}
