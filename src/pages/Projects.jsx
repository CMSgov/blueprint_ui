import { Project } from "../templates/Project";

const Projects = () => {
    const project = {"title":"Complex Amazing Technology","acronym":"CAT","creator":1,"impact_level":"moderate","location":"other","id":1};

    return (
    <>
        <h1>Projects</h1>
        <Project project={project} />
    </>
    );
  };
  
  export default Projects;