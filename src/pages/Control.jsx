import React from "react";
import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { isEmpty } from "../utils";
import Config from "../config";
import RequestService from "../services/RequestService";

import ControlTemplate from "../templates/ControlTemplate";
import ErrorMessage from "../molecules/ErrorMessage";
import GlobalState from "../GlobalState";
import LoadingIndicator from "../atoms/LoadingIndicator";

import {
  mockControlData,
  mockNextControlId,
  mockInheritedComponentNarratives,
} from "../mockData/ControlPage";

const ERROR_MESSAGE = "Error loading project control";

export default function Control() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [state, setState] = useContext(GlobalState);

  let project = useMemo(() => state.project || {}, [state]);

  useEffect(() => {
    if (project.id !== parseInt(id)) {
      RequestService.get(
        `${Config("backendUrl")}/projects/${id}/`,
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
  }, [id, project, setState]);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (hasError || isEmpty(project)) {
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
  return (
    <ControlTemplate
      project={project}
      control={mockControlData}
      nextControlId={mockNextControlId}
      inheritedComponentNarratives={mockInheritedComponentNarratives}
    />
  );
}
