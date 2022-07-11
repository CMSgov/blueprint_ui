import SearchLibrary from "./SearchLibrary";
import ProjectHeader from "../molecules/ProjectHeader";
import { Link } from "react-router-dom";
import { MAIN_ROUTES } from "../AppRoutes";
import { useState, useEffect } from "react";
import Config from "../config";
import { useLocation } from "react-router-dom";

const ProjectSystemComponentsTemplate = ({ project }) => {
  const { id, acronym, title } = project;
  const subtitle = "System Components";

  const urlParams = useLocation();
  const [error, setError] = useState(false);
  const [componentList, setComponentList] = useState([]);
  const getParams = urlParams.search;
  useEffect(() => {
    fetch(`${Config("backendUrl")}/components/search/${getParams}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((componentList) => {
        if (componentList !== undefined) {
          return setComponentList(componentList);
        } else {
          return setError(true);
        }
      })
      .catch((error) => {
        return setError(true);
      });
  }, []);

  return (
    <>
      <ProjectHeader
        id={id}
        acronym={acronym}
        subtitle={subtitle}
        title={title}
      />
      <p>
        These are the components in your system. Components includes pre-written
        control narratives. Add, remove, or create new components to match your
        system architecture, policies, and procedures.
      </p>
      <p>
        You can add components by visiting the{" "}
        <Link to={MAIN_ROUTES.COMPONENT_LIBRARY}>Component Library</Link>.
      </p>
      <SearchLibrary
        componentList={componentList}
        linkToComponentLibrary={true}
      />
    </>
  );
};

export default ProjectSystemComponentsTemplate;
