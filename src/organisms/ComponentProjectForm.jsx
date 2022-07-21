import { Dropdown, Form } from "@trussworks/react-uswds";
import { useState } from "react";
import Config from "../config";

const ComponentProjectForm = ({ project_data, component_id }) => {
  const [error, setError] = useState(false);
  const postVariables = {};

  const addComponent = (event) => {
    let path = "projects/add-component/";
    let project_id = event.target.value;
    if (!isNaN(project_id)) {
      postVariables["project_id"] = project_id;
      postVariables["component_id"] = component_id;
      postVariables["creator"] = 2;
      postProjectUpdate(postVariables, path);
    }
  };

  const removeComponent = (event) => {
    let path = "projects/remove-component/";
    postVariables["project_id"] = event.target.value;
    postVariables["component_id"] = component_id;
    postVariables["creator"] = 2;
    postProjectUpdate(postVariables, path);
  };

  function postProjectUpdate(formValues, path) {
    fetch(`${Config("backendUrl")}/${path}`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(formValues),
    })
      .then((response) => response.json())
      .catch((error) => {
        return setError(error);
      });
  }

  return (
    <>
      <Form>
        <label className="usa-label" htmlFor="project-add">
          Add to Project
        </label>
        <Dropdown
          className="usa-select"
          id="project-add"
          name="project-add"
          onChange={addComponent}
        >
          <option value key="add-none">
            - Select -
          </option>
          {project_data.add.map(({ value, label }, index) => (
            <option value={value} key={index}>
              {label}
            </option>
          ))}
        </Dropdown>
      </Form>
      <Form>
        <label className="usa-label" htmlFor="project-remove">
          Remove from Project
        </label>
        <Dropdown
          className="usa-select"
          id="project-remove"
          name="project-remove"
          onChange={removeComponent}
        >
          <option value key="remove-none">
            - Select -
          </option>
          {project_data.remove.map(({ value, label }, index) => (
            <option value={value} key={index}>
              {label}
            </option>
          ))}
        </Dropdown>
      </Form>
    </>
  );
};

export default ComponentProjectForm;