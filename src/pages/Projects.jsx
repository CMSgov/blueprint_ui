import { useState, useEffect } from "react";
import { Project } from "../templates/Project";
import { useParams } from "react-router-dom";
import config from "../config";

const Projects = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    if (project.id !== parseInt(id)) {
      fetch(`${config.backendUrl}/projects/${id}/`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((project) => {
          if(project !== undefined){
            return setProject(project);
          }
          // do we want to log this error?
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  }, [id, project]);

  return (
    <>
      <h1>Projects</h1>
      <Project project={project} />
    </>
  );
};

export default Projects;
