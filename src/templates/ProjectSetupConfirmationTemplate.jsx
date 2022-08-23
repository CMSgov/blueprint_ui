import { Link } from "react-router-dom";
import { MAIN_ROUTES } from "../AppRoutes";

const ProjectSetupConfirmationTemplate = ({ components }) => {
  return (
    <>
      <h1>Inherited policies and procedures</h1>
      <p>
        Blueprint automatically adds components for systems on the CMS AWS
        environment. Each component includes controls for policies and
        procedures needed for your System Security Plan (SSP).{" "}
      </p>
      <ul className="usa-list" data-testid="component-list">
        {components.map((component, i) => (
          <li key={i}>{component.title}</li>
        ))}
      </ul>
      <p>
        All included controls are fully inherited and added to your SSP. No
        additonal action is required.
      </p>
      <Link to={MAIN_ROUTES.PROJECT_SETUP}>
        <button className="usa-button usa-button--outline">Back</button>
      </Link>
      <a href="/project-setup/confirmation/select-components">
        <button className="usa-button">Next</button>
      </a>
    </>
  );
};

export default ProjectSetupConfirmationTemplate;
