import { ComboBox } from "@trussworks/react-uswds";

const ComponentProjectForm = ({
  project_data,
  component_id,
  handleProjectUpdate,
}) => {
  const postVariables = {};

  const addComponent = (value) => {
    if (value) {
      let path = "projects/add-component/";
      postVariables["project_id"] = value;
      postVariables["component_id"] = component_id;
      handleProjectUpdate(postVariables, path);
    }
  };

  const removeComponent = (value) => {
    if (value) {
      let path = "projects/remove-component/";
      postVariables["project_id"] = value;
      postVariables["component_id"] = component_id;
      handleProjectUpdate(postVariables, path);
    }
  };

  return (
    <div className="component-project-form">
      <div>
        <label className="usa-label" htmlFor="project-add">
          Add to Project
        </label>
        <ComboBox
          id="project-add"
          name="project-add"
          options={project_data.add}
          onChange={addComponent}
        />
      </div>

      <div>
        <label className="usa-label" htmlFor="project-remove">
          Remove from Project
        </label>
        <ComboBox
          id="project-remove"
          name="project-remove"
          options={project_data.remove}
          onChange={removeComponent}
        />
      </div>
    </div>
  );
};

export default ComponentProjectForm;
