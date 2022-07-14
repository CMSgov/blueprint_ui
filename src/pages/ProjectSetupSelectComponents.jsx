import { useState, useEffect } from "react";
import Config from "../config";
import ProjectSetupSelectComponentsTemplate from "../templates/ProjectSetupSelectComponentsTemplate";

const ProjectSetupSelectComponents = () => {
  const [componentList, setComponentList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${Config("backendUrl")}/components/search/`, {
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

  return <ProjectSetupSelectComponentsTemplate componentList={componentList} />;
};

export default ProjectSetupSelectComponents;
