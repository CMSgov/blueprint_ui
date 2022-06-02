import { useState, useEffect } from "react";
import { ProjectTemplate } from "../templates/ProjectTemplate";
import { useParams } from "react-router-dom";
import config from "../config";

const Project = () => {
  const { id } = useParams();
  const [error, setError] = useState(false);
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
          if(project !== undefined && project.id !== undefined){
            return setProject(project);
          }else{
            return setError(true);
          }
        })
        .catch((error) => {
          return setError(true);
        });
    }
  }, [id, project]);

  if(error){
    return (<h1>Project not found</h1>);
  }
  return (
    <>
      <h1>Projects</h1>
      <ProjectTemplate project={project} />
    </>
  );
};

export default Project;
