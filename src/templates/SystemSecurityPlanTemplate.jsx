import ProjectHeader from "../molecules/ProjectHeader";

const SystemSecurityPlanTemplate = ({ project }) => {
  const { id, acronym, impact_level, title } = project;

  return (
    <>
      <ProjectHeader
        id={id}
        acronym={acronym}
        impactLevel={impact_level}
        title={title}
      />
      <h2>System Security Plan Summary</h2>
      <p>
        Your draft security plan is updated as you add and complete System
        Components.{" "}
      </p>
      <table className="usa-table width-full usa-table--striped">
        <thead>
          <tr>
            <th scope="col">Documents</th>
            <th scope="col">Description</th>
            <th scope="col">Downloads</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{title} SSP</td>
            <td>
              This is the recommended file format for importing your SSP into
              CMS CFACTS.
            </td>
            <td>
              <a href="@TODO:need files">CFACTS (CSV)</a>
            </td>
          </tr>
          <tr>
            <td>{title} SSP</td>
            <td>
              Download your SSP as an editable Word document to share and edit
              anywhere.
            </td>
            <td>
              <a href="@TODO:need files">Word (DOCX)</a>
            </td>
          </tr>
          <tr>
            <td>{title} SSP (OSCAL/JSON)</td>
            <td>
              Download and share your SSP with other risk management tools that
              support NIST OSCAL.
            </td>
            <td>
              <a href="@TODO:need files">OSCAL (JSON)</a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SystemSecurityPlanTemplate;
