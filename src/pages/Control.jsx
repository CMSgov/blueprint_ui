import React from "react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { isEmpty } from "../utils";
import { config } from "../config";
import RequestService from "../services/RequestService";

import ControlTemplate from "../templates/ControlTemplate";
import ErrorMessage from "../molecules/ErrorMessage";
import GlobalState from "../GlobalState";
import LoadingIndicator from "../atoms/LoadingIndicator";

const ERROR_MESSAGE = "Error loading project control";

export default function Control() {
  const navigate = useNavigate();
  const { id, controlId } = useParams();
  const [state, setState] = useContext(GlobalState);
  const [project, setProject] = useState();
  const [control, setControl] = useState();
  const [componentData, setComponentData] = useState();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    RequestService.get(
      `${config.backendUrl}/projects/${id}/controls/${controlId}/`,
      (response) => {
        setState((state) => ({ ...state, project: response.data.project })); // TODO: This can be removed or updated accordingly when Breadcrumbs is refactored
        setProject(response.data.project);
        let control = response.data.catalog_data;
        if (control.guidance === "") {
          control.guidance =
            "No control guidance found for this control " + controlId;
        }
        if (control.implementation === "") {
          control.implementation =
            "No implementation standards found for this control " + controlId;
        }
        setControl(control);
        let componentData = response.data.component_data;
        if (typeof componentData.responsibility == "object") {
          componentData.responsibility = componentData.responsibility[0];
        }
        setComponentData(componentData);
        setIsLoading(false);
      },
      (err) => {
        setHasError(true);
        setIsLoading(false);
      }
    );
  }, [controlId, id, setState]);

  function postControlUpdate(postVariables) {
    RequestService.post(
      `${config.backendUrl}/projects/${id}/controls/${controlId}/`,
      JSON.stringify(postVariables),
      (response) => {
        const nextLink = `/projects/${id}/controls/${control.next_id}`;
        navigate(nextLink);
      }
    );
  }

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (hasError) {
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
  if (
    control !== undefined &&
    !isEmpty(control) &&
    project !== undefined &&
    !isEmpty(project) &&
    componentData !== undefined &&
    !isEmpty(componentData)
  ) {
    return (
      <ControlTemplate
        project={project}
        control={control}
        componentData={componentData}
        submitCallback={postControlUpdate}
      />
    );
  }
}
