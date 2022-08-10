import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Alert } from "@trussworks/react-uswds";
import { MAIN_ROUTES } from "../AppRoutes";
import { config } from "../config";
import RequestService from "../services/RequestService";

const ProjectSetupConfirmation = () => {
  const [project, setProject] = useState({});
  const [error, setError] = useState(false);
  const localStorageProject = JSON.parse(localStorage.getItem("project"));

  useEffect(() => {
    if (localStorageProject.components !== undefined && !project.id) {
      return setProject(localStorageProject);
    } else if (project.id !== localStorageProject.id) {
      RequestService.get(
        `${config.backendUrl}/projects/${localStorageProject.id}/`,
        (response) => {
          localStorage.setItem("project", JSON.stringify(response.data));
          setProject(response.data);
        },
        (err) => {
          setError(true);
        }
      );
    }
  }, [localStorageProject, project, setProject]);
  const components = project.components || [];

  return (
    <>
      {error && <Alert type="error">{error}</Alert>}
      <h1>Inherited policies and procedures</h1>
      <p>
        Blueprint automatically adds components for systems on the CMS AWS
        environment. Each component includes controls for policies and
        procedures needed for your System Security Plan (SSP).{" "}
      </p>
      <ul className="usa-list">
        {components.map((component, i) => (
          <li key={i}>{component.title}</li>
        ))}
      </ul>
      <p>
        All included controls are fully inherited and added to your SSP. No
        additonal action is required.
      </p>
      <Link to={MAIN_ROUTES.PROJECT_SETUP}>
        <button className="usa-button usa-button--outline">Back</button>
      </Link>
      <a href="/project-setup/confirmation/select-components">
        <button className="usa-button">Next</button>
      </a>
    </>
  );
};

export default ProjectSetupConfirmation;
