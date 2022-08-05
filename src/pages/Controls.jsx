import { useCallback, useContext, useEffect, useState } from "react";
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
  const [controlsList, setControlsList] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const urlParams = useLocation();
  const getParams = urlParams.search;

  const getProjectData = useCallback(() => {
    RequestService.get(
      `${Config("backendUrl")}/projects/${id}`,
      (response) => {
        setState((state) => ({ ...state, project: response.data }));
        setIsLoading(false);
        setIsLoading(false);
      },
      (err) => {
        throw err;
      }
    );
  }, [id, state, setState]);

  const getControlsData = () => {
    RequestService.get(
      `${Config("backendUrl")}/projects/${id}/controls/${getParams}`,
      (response) => {
        setControlsList(response.data);
        setIsLoading(false);
      },
      (err) => {
        throw err;
      }
    );
  };

  useEffect(() => {
    try {
      getProjectData();
      getControlsData();
    } catch (error) {
      return setHasError(true);
    }
  }, []);

  let totalItemCount = 0;
  let lastItem = controlsList[controlsList.length - 1];
  if (lastItem !== undefined && lastItem.total_item_count !== undefined) {
    totalItemCount = lastItem.total_item_count;
  }

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (hasError) {
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
  if (state.project && !isEmpty(state.project)) {
    return (
      <ProjectControlsTemplate
        project={state.project}
        controlsList={controlsList}
        totalItemCount={totalItemCount}
      />
    );
  }
};

export default ProjectControls;
