import ErrorMessage from "../molecules/ErrorMessage";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Config from "../config";
import GlobalState from "../GlobalState";
import SystemSecurityPlanTemplate from "../templates/SystemSecurityPlanTemplate";

const ProjectSystemSecurityPlan = () => {
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
    return <ErrorMessage message="Error loading the project" />;
  }
  return <SystemSecurityPlanTemplate project={project} />;
};

export default ProjectSystemSecurityPlan;
