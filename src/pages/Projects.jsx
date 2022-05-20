import { useState, useEffect } from "react";
import { Project } from "../templates/Project";
import { useParams } from "react-router-dom";
import config from "../config";
// import RequestService from "../RequestService";

const Projects = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
      if(project.id !== parseInt(id)){
        fetch(`${config.backendUrl}/projects/${id}/`, {
          mode: 'no-cors',
          headers: {
          'Access-Control-Allow-Origin':'*',
          'Content-type': 'application/json; charset=UTF-8'
          }
        })
        .then((response) => {
          // Why is this response failing when the network tab shows a success!>.<!
          console.log('first then block',response);
          response.json();
        })
        .then((project) => {
          //once it reaches here everything will work >.>
          console.log('api response:', project);
          return setProject(project);
        })
        .catch((error) => {
          console.log('Error:', error);
        });
        // when setProject is called with project data everything works :) 
      //   setProject({
      //     "title": "Complex Amazing Technology",
      //     "acronym": "CAT",
      //     "creator": 1,
      //     "impact_level": "moderate",
      //     "location": "other",
      //     "id": 1
      // });
      // Attempted to use axios, but fails for cors issue
      // RequestService.get(`${config.backendUrl}/projects/${id}/`, 
      // (response) => {
      //   console.log(response);
      //   setProject(response.data);
      // });
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
