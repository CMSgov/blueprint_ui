import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Config from "../config";
import ControlTemplate from "../templates/ControlTemplate";
import ErrorMessage from "../molecules/ErrorMessage";
import GlobalState from "../GlobalState";

const mockControlData = {
  controlId: "ac-1",
  controlTitle: "Access Control Policy and Procedures",
  version: "5",
  family: "ac",
  description: "some stuff",
  responsibility: "all",
  guidance:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  implementationStandards:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
};

const mockNextControlId = "ac-2";

const mockInheritedComponentNarratives =
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

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
  } else return <ErrorMessage message={errorMessage} />;
}
