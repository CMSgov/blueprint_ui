import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { isEmpty } from "../utils";
import { config } from "../config";
import RequestService from "../services/RequestService";

import ErrorMessage from "../molecules/ErrorMessage";
import GlobalState from "../GlobalState";
import LoadingIndicator from "../atoms/LoadingIndicator";
import ProjectComponentsTemplate from "../templates/ProjectComponentsTemplate";

const ERROR_MESSAGE = "Error loading system components";

const ProjectComponents = () => {
  const { id } = useParams();

  const [state, setState] = useContext(GlobalState);
  const [componentList, setComponentList] = useState([]);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [typeList, setTypeList] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const urlParams = useLocation();
  const getParams = urlParams.search;

  useEffect(() => {
    RequestService.get(
      `${config.backendUrl}/projects/${id}/search/${getParams}`,
      (response) => {
        const projectData = response.data[0]["project"];
        const componentsData = response.data[1]["components"];
        const totalItemCountData = response.data[2]["total_item_count"];
        const typeListData = response.data[3]["type_list"];
        setState((state) => ({ ...state, project: projectData }));
        setComponentList(componentsData);
        setTotalItemCount(totalItemCountData);
        setTypeList(typeListData);
        setIsLoading(false);
      },
      (err) => {
        setHasError(true);
        setIsLoading(false);
      }
    );
  }, [id, getParams, setState]);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (hasError || isEmpty(state.project)) {
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
  return (
    <ProjectComponentsTemplate
      project={state.project}
      componentList={componentList}
      totalItemCount={totalItemCount}
      typeList={typeList}
    />
  );
};

export default ProjectComponents;
