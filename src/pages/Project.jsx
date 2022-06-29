import { useState, useEffect, useContext } from "react";
import { ProjectTemplate } from "../templates/ProjectTemplate";
import { useParams } from "react-router-dom";
import Config from "../config";
import GlobalState from "../GlobalState";

const Project = () => {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [state, setState] = useContext(GlobalState);
  let project = state.project;
  if (state.project === undefined) {
    project = {};
  }

  useEffect(() => {
    if (project.id !== parseInt(id)) {
      fetch(`${Config("backendUrl")}/projects/${id}/`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((project) => {
          if (project !== undefined && project.id !== undefined) {
            return setState((state) => ({ ...state, project: project }));
          } else {
            return setError(true);
          }
        })
        .catch((error) => {
          return setError(true);
        });
    }
  }, [id, project, setState]);

  if (error) {
    return <h1>Project not found</h1>;
  }
  return (
    <>
      <h1>Projects</h1>
      <ProjectTemplate project={project} />
    </>
  );
};

export default Project;
