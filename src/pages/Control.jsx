import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Config from "../config";
import { ControlTemplate } from "../templates/ControlTemplate";
import ErrorMessage from "../molecules/ErrorMessage";

const sampleData = {
  controlId: "ac-1",
  version: "5",
  family: "ac",
  description: "some stuff",
  responsibility: "all",
  guidance:
    "No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in  actual service in time of War or public danger; nor shall any person be  subject for the same offence to be twice put in jeopardy of life or  limb; nor shall be compelled in any criminal case to be a witness  against himself, nor be deprived of life, liberty, or property, without  due process of law; nor shall private property be taken for public use,  without just compensation.",
};

export default function ProjectSettings() {
  const { id, controlId } = useParams();

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
    return <ControlTemplate project={project} control={sampleData} />;
  } else return <ErrorMessage message={errorMessage} />;
}
