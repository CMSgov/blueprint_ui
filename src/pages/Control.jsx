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
  const [state, setState] = useContext(GlobalState);
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

  function postControlUpdate(postVariables) {
    const nextPageId = pageData.catalog_data.next_id;
    RequestService.patch(
      `${config.backendUrl}/projects/${id}/controls/${nextPageId}/`,
      JSON.stringify(postVariables),
      (response) => {
        toast(AlertToast("success", `Control ${controlId} has been saved.`));
        const nextLink = `/projects/${id}/controls/${nextPageId}`;
        navigate(nextLink);
      },
      (err) => {
        toast(AlertToast("error", `Something went wrong, try again.`));
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
    return (
      <ControlTemplate
        project={pageData.project}
        control={pageData.catalog_data}
        componentData={pageData.component_data}
        submitCallback={postControlUpdate}
      />
    );
  }
}
