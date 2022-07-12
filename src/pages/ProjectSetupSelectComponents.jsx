const TableRow = ({ component }) => {
  if (component.title === undefined) {
    return "";
  }
  return (
    <>
      <td></td>
      <td>{component.title}</td>
      <td>{component.description}</td>
      <td>{component.controls_count}</td>
    </>
  );
};

const ProjectSetupSelectComponents = () => {
  // @TODO: Settup the data for this placeholder page use the local storage to get the components
  const componentList = [];
  return (
    <>
      <h1>Select components for your system technologies</h1>
      <ul class="usa-list">
        <li>
          Blueprint matches your system's technologies to components, which
          include groups of related controls and control narratives.
        </li>
        <li>
          Select the components that apply to the technologies your system is
          using.
        </li>
        <li>
          As you continue to build your system, use the Component Library to add
          components to develop your System Security Plan.
        </li>
      </ul>
      <table className="usa-table width-full usa-table--striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Component</th>
            <th scope="col">Description</th>
            <th scope="col">Controls</th>
          </tr>
        </thead>
        <tbody>
          {componentList.map((component, i) => (
            <tr key={i}>
              <TableRow component={component} />
            </tr>
          ))}
        </tbody>
      </table>
      <a href="/project-setup/confirmation">
        <button className="usa-button usa-button--outline">Back</button>
      </a>
      <a href="/project/{project.id}">
        <button className="usa-button">Confirm</button>
      </a>
    </>
  );
};

export default ProjectSetupSelectComponents;
