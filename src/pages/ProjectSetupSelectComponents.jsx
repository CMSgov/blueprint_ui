import { useState, useEffect } from "react";

import { config } from "../config";
import RequestService from "../services/RequestService";

import ErrorMessage from "../molecules/ErrorMessage";
import LoadingIndicator from "../atoms/LoadingIndicator";
import ProjectSetupSelectComponentsTemplate from "../templates/ProjectSetupSelectComponentsTemplate";

const ERROR_MESSAGE = "Error loading components for project setup";

const ProjectSetupSelectComponents = () => {
  const [componentList, setComponentList] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const localStorageProject = JSON.parse(localStorage.getItem("project"));
  const projectId = localStorageProject.id;
  useEffect(() => {
    RequestService.get(
      `${config.backendUrl}/projects/${projectId}/components-not-added/`,
      (response) => {
        setComponentList(response.data);
        setIsLoading(false);
      },
      (err) => {
        setHasError(true);
        setIsLoading(false);
      }
    );
  }, [projectId]);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (hasError) {
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
  return (
    <ProjectSetupSelectComponentsTemplate
      componentList={componentList}
      projectId={projectId}
    />
  );
};

export default ProjectSetupSelectComponents;
