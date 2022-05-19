import { useState, useEffect } from "react";
import { Project } from "../templates/Project";

const Projects = () => {
    const [project, setProject] = useState({});

    useEffect(() => {
         fetch(`api/projects/1/`, {
            mode: 'no-cors',
            headers: {
            'Access-Control-Allow-Origin':'*',
            'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then((response) => response.json())
        .then(data => setProject(data))
      }, []);

    return (
    <>
        <h1>Projects</h1>
        <Project project={project} />
    </>
    );
  };
  
  export default Projects;
  