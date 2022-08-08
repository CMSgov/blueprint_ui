import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import Config from "../config";
import RequestService from "../services/RequestService";
import { isEmpty } from "../utils";

import LoadingIndicator from "../atoms/LoadingIndicator";
import GlobalState from "../GlobalState";
import ErrorMessage from "../molecules/ErrorMessage";
import ProjectControlsTemplate from "../templates/ProjectControlsTemplate";

const ERROR_MESSAGE = "Error loading system controls";

const ProjectControls = () => {
  const { id } = useParams();

  const [state, setState] = useContext(GlobalState);
  const [isLoading, setIsLoading] = useState(false);
  const urlParams = useLocation();
  const getParams = urlParams.search;

  useEffect(() => {
    if (!state.project || state.project.id !== parseInt(id)) {
      setIsLoading(true);
      RequestService.get(
        `${Config("backendUrl")}/projects/${id}/controls/${getParams}`,
        (response) => {
          setState((state) => ({
            ...state,
            project: response.data.project_data,
          }));
          setState((state) => ({ ...state, controls: response.data.controls }));
          setState((state) => ({
            ...state,
            item_count: response.data.total_item_count,
          }));
          setIsLoading(false);
        },
        (err) => {
          setIsLoading(false);
        }
      );
    }
  }, [id, state, getParams, setState]);

  if (isLoading) {
    return <LoadingIndicator />;
  } else if (state.project && !isEmpty(state.project)) {
    return (
      <ProjectControlsTemplate
        project={state.project}
        controlsList={state.controls}
        totalItemCount={state.item_count}
      />
    );
  } else {
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
};

export default ProjectControls;
