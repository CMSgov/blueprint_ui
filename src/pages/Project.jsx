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

  const [state, setState] = useContext(GlobalState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!state.project || state.project.id !== parseInt(id)) {
      setIsLoading(true);
      RequestService.get(
        `${config.backendUrl}/projects/${id}/`,
        (response) => {
          setState((state) => ({ ...state, project: response.data }));
          setIsLoading(false);
        },
        (err) => {
          setIsLoading(false);
        }
      );
    }
  }, [id, state, setState]);

  if (isLoading) {
    return <LoadingIndicator />;
  } else if (state.project && !isEmpty(state.project)) {
    return <ProjectTemplate project={state.project} />;
  } else {
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
};

export default Project;
