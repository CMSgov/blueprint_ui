import React from "react";
import { useEffect, useState, useContext } from "react";

import Config from "../config";
import RequestService from "../services/RequestService";
import AuthContext from "../AuthContext";

import ErrorMessage from "../molecules/ErrorMessage";
import LoadingIndicator from "../atoms/LoadingIndicator";
import ProjectsTemplate from "../templates/ProjectsTemplate";

const ERROR_MESSAGE = "Error loading projects";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  let { authToken } = useContext(AuthContext);
  console.log("Projects auth token: ", authToken);

  useEffect(() => {
    RequestService.get(
      `${Config("backendUrl")}/projects/`,
      authToken,
      (response) => {
        setProjects(response.data);
        setIsLoading(false);
      },
      (err) => {
        setHasError(true);
        setIsLoading(false);
      }
    );
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (hasError) {
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
  return <ProjectsTemplate projects={projects} />;
}
