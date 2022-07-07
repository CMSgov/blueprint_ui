import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Config from "../config";
import { ProjectSettingsTemplate } from "../templates/ProjectSettingsTemplate";
import ErrorMessage from "../molecules/ErrorMessage";

export default function ProjectSettings() {
  const { id } = useParams();

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [project, setProject] = useState({});

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
            return setProject(jsonResponse);
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
  }, [id, project]);

  if (!error && Object.keys(project).length > 0) {
    return <ProjectSettingsTemplate project={project} />;
  }
  return <ErrorMessage message={errorMessage} />;
}
