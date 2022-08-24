import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { isEmpty } from "../utils";
import { config } from "../config";
import RequestService from "../services/RequestService";

import SystemSecurityPlanTemplate from "../templates/SystemSecurityPlanTemplate";
import ErrorMessage from "../molecules/ErrorMessage";
import GlobalState from "../GlobalState";
import LoadingIndicator from "../atoms/LoadingIndicator";

const ERROR_MESSAGE = "Error loading project";

const ProjectSystemSecurityPlan = () => {
  const { id } = useParams();

  const [state, setState] = useContext(GlobalState);
  const [hasError, setHasError] = useState(false);
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
          setHasError(true);
          setIsLoading(false);
        }
      );
    }
  }, [id, state, setState]);

  if (isLoading) {
    console.log("isLoading state displayed");
    return <LoadingIndicator />;
  }
  if (hasError) {
    console.log("error state displayed");
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
  if (state.project && !isEmpty(state.project)) {
    console.log("template displayed");
    return <SystemSecurityPlanTemplate project={state.project} />;
  }
  console.log("implicit else return nothing");
};

export default ProjectSystemSecurityPlan;
