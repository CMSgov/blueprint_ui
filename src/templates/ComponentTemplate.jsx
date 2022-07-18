import { Accordion } from "@trussworks/react-uswds";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ResponsibilityBox from "../atoms/ResponsibilityBox";
import ComponentProjectForm from "../organisms/ComponentProjectForm";
import ControlHeader from "../organisms/ControlHeader";

export function ComponentTemplate({ component, controlText, catalogData }) {
  const { title, description, standard, source } = component.component_data;

  const accordionItemsProps = [
    {
      title: "CMS Implementation Standards",
      content: <p>{controlText.implementationStandards}</p>,
      expanded: false,
      id: "implementation_standards",
      headingLevel: "h3",
    },
    {
      title: "CMS Control Guidance",
      content: <p>{controlText.guidance}</p>,
      expanded: false,
      id: "control_guidance",
      headingLevel: "h3",
    },
    {
      title: "Narrative",
      content: <p>{controlText.narrative}</p>,
      expanded: true,
      id: "inherited_narratives",
      headingLevel: "h3",
    },
  ];

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="grid-container">
        <div className="grid-row">
          <div className="tablet:grid-col padding-top-1">
            <p>
              <b>Standard:</b> {standard}
            </p>
            <p>
              <b>Source link:</b> <a href={source}>Source</a>
            </p>
            <p>
              <b>Vetted Status:</b>{" "}
              {component.vetted ? component.vetted : "No data available"}
            </p>
            <p>
              <b>Assessment Status:</b>{" "}
              {component.assessment
                ? component.assessment
                : "No data available"}
            </p>
          </div>
          <div className="tablet:grid-col">
            <ComponentProjectForm
              project_data={component.project_data}
              component_id={component.id}
            />
          </div>
        </div>
      </div>
      <div className="grid-container border-top margin-top-4" id="controls">
        <div className="grid-row">
          <div className="grid-col-2">
            <h3 className="text-bold margin-bottom-2 margin-top-1">Controls</h3>
            <nav aria-label="Secondary navigation">
              <ul className="usa-sidenav">
                {Object.entries(component.catalog_data.controls).map(
                  ([key, val]) => (
                    <li className="usa-sidenav__item" key={key}>
                      <a href="#controls" onClick={() => catalogData(key)}>
                        {val.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
          <div className="grid-col-fill padding-4 margin-x-2">
            {controlText ? (
              <>
                <ControlHeader control={controlText} />
                <ResponsibilityBox
                  responsibility={controlText.responsibility}
                />
                <div className="control-page">
                  <Accordion
                    items={accordionItemsProps}
                    multiselectable
                    bordered
                    className={"control-page-accordion"}
                  />
                </div>
              </>
            ) : (
              <>
                <p>
                  System components are group(s) of control narratives that help
                  you create your System Security Plan faster. Components align
                  with your system's architecture, policies and procedures.
                </p>
                <p>
                  This {component.title} component includes all of the controls
                  listed on the left. If this component applies to your system,
                  add it to your project.
                </p>
              </>
            )}
            <p>
              <Link to="/components">Back to Component Library</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ComponentTemplate.propTypes = {
  component: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    standard: PropTypes.string,
    source: PropTypes.string,
    narrative: PropTypes.string,
    responsibility: PropTypes.string,
    controls: PropTypes.array,
  }).isRequired,
  control: PropTypes.shape({
    controlId: PropTypes.string,
    controlTitle: PropTypes.string,
    controlFamily: PropTypes.string,
    description: PropTypes.string,
    family: PropTypes.string,
    guidance: PropTypes.string,
    implementationStandards: PropTypes.string,
    responsibility: PropTypes.oneOf(["none", "some", "all"]).isRequired,
    version: PropTypes.string,
  }),
};
