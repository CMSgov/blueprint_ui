import { useCallback, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import Config from "../config";
import RequestService from "../services/RequestService";

import LoadingIndicator from "../atoms/LoadingIndicator";
import ErrorMessage from "../molecules/ErrorMessage";
import ProjectControlsTemplate from "../templates/ProjectControlsTemplate";

const ERROR_MESSAGE = "Error loading system controls";

const ProjectControls = () => {
  const { id } = useParams();

  const [projectData, setProjectData] = useState([]);
  const [controlsList, setControlsList] = useState([]);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const urlParams = useLocation();
  const getParams = urlParams.search;

  const getProjectData = useCallback(() => {
    RequestService.get(
      `${Config("backendUrl")}/projects/${id}`,
      (response) => {
        setProjectData(response.data);
      },
      (err) => {
        throw err;
      }
    );
  }, [id]);

  const getControlsData = useCallback(() => {
    RequestService.get(
      `${Config("backendUrl")}/projects/${id}/controls/${getParams}`,
      (response) => {
        setControlsList(response.data);
        let lastItem = controlsList[controlsList.length - 1];
        if (lastItem !== undefined && lastItem.total_item_count !== undefined) {
          setTotalItemCount(lastItem.total_item_count);
        }
        setIsLoading(false);
      },
      (err) => {
        throw err;
      }
    );
  }, [id, controlsList, getParams]);

  useEffect(() => {
    try {
      getProjectData();
      getControlsData();
    } catch (error) {
      return setHasError(true);
    }
  }, [getControlsData, getProjectData, setHasError]);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (hasError) {
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
  return (
    <ProjectControlsTemplate
      project={projectData}
      controlsList={controlsList}
      totalItemCount={totalItemCount}
    />
  );
};

export default ProjectControls;
