import PropTypes from "prop-types";
import ProjectCard from "../molecules/ProjectCard";

export default function ProjectsTemplate({ projects = [] }) {
  return (
    <div className="projects-page" data-testid="projects_page">
      <h1>Projects</h1>
      <div className="subtitle">
        You have access to {projects.length} project(s).
      </div>
      <div className="cards-container">
        {projects.map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </div>
    </div>
  );
}

ProjectsTemplate.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      acronym: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
