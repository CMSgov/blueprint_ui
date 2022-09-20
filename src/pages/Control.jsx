import React from "react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AlertToast from "../atoms/AlertToast";

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
  const [, setState] = useContext(GlobalState);
  const [pageData, setPageData] = useState();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    RequestService.get(
      `${config.backendUrl}/projects/${id}/controls/${controlId}/`,
      (response) => {
        setState((state) => ({ ...state, project: response.data.project })); // TODO: This can be removed or updated accordingly when Breadcrumbs is refactored
        setPageData(response.data);
        setIsLoading(false);
      },
      (err) => {
        setHasError(true);
        setIsLoading(false);
      }
    );
  }, [controlId, id, setState]);

  function updateProjectControl(
    patchComponentVariables,
    patchControlVariables
  ) {
    const nextPageId = pageData.catalog_data.next_id;
    const privateComponentId = pageData.project.private_component;

    // Initial request (update private component)
    RequestService.patch(
      `${config.backendUrl}/components/${privateComponentId}/implemented-requirements/`,
      JSON.stringify(patchComponentVariables),

      // Initial request success
      (response) => {
        // Subsequent request (update the project control data including status)
        RequestService.patch(
          `${config.backendUrl}/projects/${id}/controls/${controlId}/`,
          JSON.stringify(patchControlVariables),

          // Subsequent request success (display toast alert and navigate to next control)
          (response) => {
            toast(
              AlertToast(
                "success",
                `Control ${controlId.toUpperCase()} has been saved.`
              )
            );
            const nextLink = `/projects/${id}/controls/${nextPageId}`;
            navigate(nextLink);
          },

          // Subsequent request failure (display alert toast)
          (err) => {
            toast(
              AlertToast(
                "error",
                "Something went wrong updating the project control, try again."
              )
            );
          }
        );
      },

      // Initial request failure (display alert toast)
      (err) => {
        toast(
          AlertToast(
            "error",
            "Something went wrong updating the private narrative, try again."
          )
        );
      }
    );
  }

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (hasError) {
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
  if (pageData) {
    let controlData = pageData.catalog_data;
    controlData.id = pageData.control.id;
    controlData.controlIdName = pageData.control.control_id;
    controlData.status = pageData.status;
    return (
      <ControlTemplate
        project={pageData.project}
        control={controlData}
        component={pageData.component_data}
        submitCallback={updateProjectControl}
      />
    );
  }
}
