import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { config } from "../config";
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
  const [controls, setControls] = useState(false);
  const [isLoadingProject, setIsLoadingProject] = useState(false);
  const [isLoadingControls, setIsLoadingControls] = useState(false);
  const urlParams = useLocation();
  const getParams = urlParams.search;

  useEffect(() => {
    if (!state.project || state.project.id !== parseInt(id)) {
      setIsLoadingProject(true);
      RequestService.get(
        `${config.backendUrl}/projects/${id}/`,
        (response) => {
          setState((state) => ({ ...state, project: response.data }));
          setIsLoadingProject(false);
        },
        (err) => {
          setIsLoadingProject(false);
        }
      );
    }
  }, [id, setState, state.project]);

  useEffect(() => {
    setIsLoadingControls(true);
    RequestService.get(
      `${config.backendUrl}/projects/${id}/controls/${getParams}`,
      (response) => {
        setControls(response.data);
        setIsLoadingControls(false);
      },
      (err) => {
        setIsLoadingControls(false);
      }
    );
  }, [id, getParams]);

  if (isLoadingControls || isLoadingProject) {
    return <LoadingIndicator />;
  } else if (state.project && !isEmpty(state.project)) {
    return (
      <ProjectControlsTemplate
        project={state.project}
        controlsList={controls.results}
        totalItemCount={controls.count}
      />
    );
  } else {
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
};

export default ProjectControls;
