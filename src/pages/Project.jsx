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
  const [isLoading, setIsLoading] = useState(true);

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
    console.log("isLoading state displayed");
    return <LoadingIndicator />;
  } else if (state.project && !isEmpty(state.project)) {
    console.log("template displayed");
    return <ProjectTemplate project={state.project} />;
  } else {
    console.log("error state displayed");
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
};

export default Project;
