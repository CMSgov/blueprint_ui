import React from "react";
import { useEffect, useState, useContext, useMemo } from "react";
import { useParams } from "react-router-dom";

import { isEmpty } from "../utils";
import Config from "../config";
import RequestService from "../services/RequestService";

import { ProjectSettingsTemplate } from "../templates/ProjectSettingsTemplate";
import ErrorMessage from "../molecules/ErrorMessage";
import GlobalState from "../GlobalState";
import LoadingIndicator from "../atoms/LoadingIndicator";

const ERROR_MESSAGE = "Error loading project settings";

export default function ProjectSettings() {
  const { id } = useParams();

  const [state, setState] = useContext(GlobalState);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  let project = state.project || {}

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
  return <ProjectSettingsTemplate project={project} />;
}
