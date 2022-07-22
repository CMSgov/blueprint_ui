import { useState, useEffect, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import Config from "../config";
import ErrorMessage from "../molecules/ErrorMessage";
import GlobalState from "../GlobalState";
import ProjectSystemComponentsTemplate from "../templates/ProjectSystemComponentsTemplate";

const ProjectSystemComponents = () => {
  const urlParams = useLocation();
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [state, setState] = useContext(GlobalState);
  const [errorMessage, setErrorMessage] = useState(null);
  const [componentList, setComponentList] = useState([]);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [typeList, setTypeList] = useState(0);
  const getParams = urlParams.search;

  let project = state.project;
  if (state.project === undefined) {
    project = {};
  }

  useEffect(() => {
    if (project.id !== parseInt(id)) {
      fetch(`${Config("backendUrl")}/projects/${id}/search/${getParams}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          project = response[0]["project"];
          if (project !== undefined && project.id !== undefined) {
            setState((state) => ({ ...state, project: project }));
            setComponentList(response[1]["components"]);
            setTotalItemCount(response[2]["total_item_count"]);
            setTypeList(response[3]["type_list"]);
          } else {
            setErrorMessage("Error loading project information");
            return setError(true);
          }
        })
        .catch((error) => {
          return setError(true);
        });
    }
  }, [id, project, setState]);

  if (error) {
    return <ErrorMessage message={errorMessage} />;
  }
  return (
    <ProjectSystemComponentsTemplate
      project={project}
      componentList={componentList}
      totalItemCount={totalItemCount}
      typeList={typeList}
    />
  );
};

export default ProjectSystemComponents;
