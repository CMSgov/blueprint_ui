import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Config from "../config";
import { ProjectSettingsTemplate } from "../templates/ProjectSettingsTemplate";
import ErrorMessage from "../molecules/ErrorMessage";
import GlobalState from "../GlobalState";

export default function ProjectSettings() {
  const { id } = useParams();

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [state, setState] = useContext(GlobalState);
  let project = state.project;
  if (state.project === undefined) {
    project = {};
  }

  useEffect(() => {
    if (project.id !== parseInt(id)) {
      fetch(`${Config("backendUrl")}/projects/${id}/`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((jsonResponse) => {
          if (jsonResponse !== undefined && jsonResponse.id !== undefined) {
            return setState((state) => ({ ...state, project: jsonResponse }));
          } else {
            // extract the response message to use as the error mesage or use backup message
            setErrorMessage(
              jsonResponse.response || "Error loading project settings"
            );
            return setError(true);
          }
        })
        .catch((error) => {
          return setError(true);
        });
    }
  }, [id, project, setState]);

  if (!error && Object.keys(project).length > 0) {
    return <ProjectSettingsTemplate project={project} />;
  }
  return <ErrorMessage message={errorMessage} />;
}
