import { ComboBox, Label } from "@trussworks/react-uswds";

const ComponentProjectForm = ({
  projectData,
  componentId,
  handleProjectUpdate,
}) => {
  const postVariables = {};

  const addComponent = (value) => {
    if (value) {
      let path = "add-component/";
      postVariables["project_id"] = value;
      postVariables["component_id"] = componentId;
      handleProjectUpdate(postVariables, path);
    }
  };

  const removeComponent = (value) => {
    if (value) {
      let path = "remove-component/";
      postVariables["project_id"] = value;
      postVariables["component_id"] = componentId;
      handleProjectUpdate(postVariables, path);
    }
  };

  return (
    <div className="component-project-form">
      <div data-testid="add-section">
        <Label htmlFor="project-add">Add to Project</Label>
        <ComboBox
          id="project-add"
          name="project-add"
          options={projectData.add}
          onChange={addComponent}
        />
      </div>

      <div data-testid="remove-section">
        <Label htmlFor="project-remove">Remove from Project</Label>
        <ComboBox
          id="project-remove"
          name="project-remove"
          options={projectData.remove}
          onChange={removeComponent}
        />
      </div>
    </div>
  );
};

export default ComponentProjectForm;
