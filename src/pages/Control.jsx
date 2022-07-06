import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Config from "../config";
import ControlTemplate from "../templates/ControlTemplate";
import ErrorMessage from "../molecules/ErrorMessage";
import GlobalState from "../GlobalState";
import {
  mockControlData,
  mockNextControlId,
  mockInheritedComponentNarratives,
} from "../mockData/ControlPage";

export default function Control() {
  const { id, controlId } = useParams();

  const [error, setError] = useState(false);
  const [state, setState] = useContext(GlobalState);
  const [errorMessage, setErrorMessage] = useState(null);

  let project = {};
  if (state.project !== undefined) {
    project = state.project;
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
        .then((project) => {
          if (project !== undefined && project.id !== undefined) {
            return setState((state) => ({ ...state, project: project }));
          } else {
            // extract the response message to use as the error mesage or use backup message
            setErrorMessage(
              project.response || "Error loading project control"
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
    return (
      <ControlTemplate
        project={project}
        control={mockControlData}
        nextControlId={mockNextControlId}
        inheritedComponentNarratives={mockInheritedComponentNarratives}
      />
    );
  }
  return <ErrorMessage message={errorMessage} />;
}
