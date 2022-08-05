import { useState, useEffect } from "react";

import config from "../config";
import RequestService from "../services/RequestService";

import ErrorMessage from "../molecules/ErrorMessage";
import LoadingIndicator from "../atoms/LoadingIndicator";
import ProjectSetupSelectComponentsTemplate from "../templates/ProjectSetupSelectComponentsTemplate";

const ERROR_MESSAGE = "Error loading components for project setup";

const ProjectSetupSelectComponents = () => {
  const [componentList, setComponentList] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    RequestService.get(
      `${config.backendUrl}/components/search/`,
      (response) => {
        setComponentList(response.data);
        setIsLoading(false);
      },
      (err) => {
        setHasError(true);
        setIsLoading(false);
      }
    );
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (hasError) {
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
  return <ProjectSetupSelectComponentsTemplate componentList={componentList} />;
};

export default ProjectSetupSelectComponents;
