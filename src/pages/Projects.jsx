import React from "react";
import ProjectsTemplate from "../templates/ProjectsTemplate";
import { useEffect, useState } from "react";
import Config from "../config";
import ErrorMessage from "../molecules/ErrorMessage";
import RequestService from "../services/RequestService";

const ERROR_MESSAGE = "Error loading projects";

export default function Projects() {
  const [error, setError] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    RequestService.get(
      `${Config("backendUrl")}/projects/`,
      (response) => {
        setProjects(response.data);
      },
      (err) => {
        setError(true);
      }
    );
  }, []);

  if (error) {
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
  return <ProjectsTemplate projects={projects} />;
}
