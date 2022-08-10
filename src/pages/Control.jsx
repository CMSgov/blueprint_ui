import React from "react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { isEmpty } from "../utils";
import { config } from "../config";
import RequestService from "../services/RequestService";
import { Navigate } from "react-router-dom";

import ControlTemplate from "../templates/ControlTemplate";
import ErrorMessage from "../molecules/ErrorMessage";
import GlobalState from "../GlobalState";
import LoadingIndicator from "../atoms/LoadingIndicator";

const ERROR_MESSAGE = "Error loading project control";

export default function Control() {
  const { id, controlId } = useParams();
  const [state, setState] = useContext(GlobalState);
  const [isLoading, setIsLoading] = useState(false);
  const [control, setControl] = useState();
  const [componentData, setComponentData] = useState();
  const [response, setResponse] = useState(false);

  if (response) {
    const nextLink = `/projects/${id}/controls/${control.next_id}`;
    <Navigate to={nextLink} />;
  }

  useEffect(() => {
    if (!state.project || state.project.id !== parseInt(id)) {
      setIsLoading(true);
      RequestService.get(
        `${config.backendUrl}/projects/${id}/controls/${controlId}/`,
        (response) => {
          setState((state) => ({ ...state, project: response.data }));
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
          setIsLoading(false);
        }
      );
    }
  }, [controlId, id, state, setState]);

  function postControlUpdate(postVariables) {
    RequestService.post(
      `${config.backendUrl}/projects/${id}/controls/${controlId}/`, // @TODO: need a real endpoint here
      JSON.stringify(postVariables),
      (response) => {
        // @TODO: handle response
        setResponse(true);
      }
    );
  }

  if (isLoading) {
    return <LoadingIndicator />;
  } else if (
    control !== undefined &&
    !isEmpty(control) &&
    state.project !== undefined &&
    !isEmpty(state.project) &&
    componentData !== undefined &&
    !isEmpty(componentData)
  ) {
    return (
      <ControlTemplate
        project={state.project}
        control={control}
        componentData={componentData}
        submitCallback={postControlUpdate}
      />
    );
  }
  return <ErrorMessage message={ERROR_MESSAGE} />;
}
