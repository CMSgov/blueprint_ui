import PropTypes from "prop-types";
import ProjectHeader from "../molecules/ProjectHeader";
import ControlsList from "./ControlsList";

const ProjectControlsTemplate = ({ project, controlsList, totalItemCount }) => {
  const { id, acronym, title, impact_level } = project;
  const subtitle = "System Controls";

  return (
    <>
      <ProjectHeader
        id={id}
        acronym={acronym}
        subtitle={subtitle}
        title={title}
        impact_level={impact_level}
      />
      <p>
        These are the controls for a <b>{impact_level}</b> FISMA Impact Level.
        If you need to change the control baseline for this system, which will
        happen in the system of record (CFACTS) contact your Cyber Risk Advisor
        (CRA).
      </p>
      <p>
        You can filter the table by completion status and control
        responsibility, which can be Fully Inherited, Shared/Hybrid, or
        Allocated.
      </p>
      {
        <ControlsList
          controlsList={controlsList}
          totalItemCount={totalItemCount}
        />
      }
    </>
  );
};

export default ProjectControlsTemplate;

ProjectControlsTemplate.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      acronym: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      impact_level: PropTypes.string.isRequired,
    })
  ),
};
