import { useState, useEffect } from "react";
import { config } from "../config";
import RequestService from "../services/RequestService";
import ProjectSetupConfirmationTemplate from "../templates/ProjectSetupConfirmationTemplate";
import LoadingIndicator from "../atoms/LoadingIndicator";
import ErrorMessage from "../molecules/ErrorMessage";

const ERROR_MESSAGE = "Error loading project components";

const ProjectSetupConfirmation = () => {
  const [project, setProject] = useState({});
  const [components, setComponents] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const localStorageProject = JSON.parse(localStorage.getItem("project"));

  useEffect(() => {
    if (localStorageProject.components !== undefined && !project.id) {
      setIsLoading(false);
      setComponents(localStorageProject.components);
      return setProject(localStorageProject);
    } else if (project.id !== localStorageProject.id) {
      setIsLoading(true);
      RequestService.get(
        `${config.backendUrl}/projects/${localStorageProject.id}/`,
        (response) => {
          localStorage.setItem("project", JSON.stringify(response.data));
          setProject(response.data);
          setComponents(response.data.components);
          setIsLoading(false);
        },
        (err) => {
          setIsLoading(false);
        }
      );
    }
  }, [localStorageProject, project, setProject]);

  if (isLoading) {
    return <LoadingIndicator />;
  } else if (components !== undefined) {
    return <ProjectSetupConfirmationTemplate components={components} />;
  } else {
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
};

export default ProjectSetupConfirmation;
