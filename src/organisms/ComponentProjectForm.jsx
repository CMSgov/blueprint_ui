const ComponentProjectForm = ({ project_data }) => {
  const addComponent = (event) => {
    console.log(event.target.value);
  };
  const removeComponent = (event) => {
    console.log(event.target.value);
  };
  return (
    <form className="usa-form">
      <label className="usa-label" htmlFor="project-add">
        Add to Project
      </label>
      <select className="usa-select" name="project-add" onChange={addComponent}>
        <option value key="add-none">
          - Select -
        </option>
        {project_data.add.map(({ value, label }, index) => (
          <option value={value} key={index}>
            {label}
          </option>
        ))}
      </select>
      <label className="usa-label" htmlFor="project-remove">
        Remove from Project
      </label>
      <select
        className="usa-select"
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
      </select>
    </form>
  );
};

export default ComponentProjectForm;
