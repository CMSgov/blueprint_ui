import { useState, useEffect } from "react";
import { Project } from "../templates/Project";
import { useParams } from "react-router-dom";
import config from "../config";

const FetchProject = (id) => {
  const [project, setProject] = useState({});

  useEffect(() => {
    fetch(`${config.backendUrl}/projects/${id}/`, {
       mode: 'no-cors',
       headers: {
       'Access-Control-Allow-Origin':'*',
       'Content-type': 'application/json; charset=UTF-8'
       }
    })
    .then((response) => response.json())
    .then((project) => {
      console.log('api response:', project);
      return setProject(project);
    });
    console.log('end of useEffect', project);
  }, [id]);
  console.log('FetchProject returning project:', project);
  return project;
};

const Projects = () => {
    const { id } = useParams();
    const project = FetchProject(id);
console.log('returned project:',project);

  return (
    <>
        <h1>Projects</h1>
        <Project project={project} />
    </>
  );
};
  
export default Projects;
