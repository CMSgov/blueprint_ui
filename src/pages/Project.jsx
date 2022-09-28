import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { isEmpty } from "../utils";
import { config } from "../config";
import RequestService from "../services/RequestService";

import { ProjectTemplate } from "../templates/ProjectTemplate";
import ErrorMessage from "../molecules/ErrorMessage";
import GlobalState from "../GlobalState";
import LoadingIndicator from "../atoms/LoadingIndicator";

const ERROR_MESSAGE = "Error loading project";

const Project = () => {
  const { id } = useParams();
  const [, setState] = useContext(GlobalState);
  const [project, setProject] = useState();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    RequestService.get(
      `${config.backendUrl}/projects/${id}/`,
      (response) => {
        setState((state) => ({ ...state, project: response.data })); // TODO: This can be removed or updated accordingly when Breadcrumbs is refactored
        setProject(response.data);
        setIsLoading(false);
      },
      (err) => {
        setHasError(true);
        setIsLoading(false);
      }
    );
  }, [id, setProject, setState]);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (hasError) {
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
  if (project && !isEmpty(project)) {
    return <ProjectTemplate project={project} />;
  }
};

export default Project;
