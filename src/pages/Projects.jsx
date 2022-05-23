import { useState, useEffect } from "react";
import { Project } from "../templates/Project";
import { useParams } from "react-router-dom";
import config from "../config";
// import RequestService from "../RequestService";

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
        .then((response) => {
          // Why is this response failing when the network tab shows a success!>.<!
          console.log("first then block", response);
          response.json();
        })
        .then((project) => {
          //once it reaches here everything will work >.>
          console.log("api response:", project);
          return setProject(project);
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
