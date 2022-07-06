import PropTypes from "prop-types";
import { Accordion, Checkbox, Textarea } from "@trussworks/react-uswds";
import ProjectHeader from "../molecules/ProjectHeader";
import ResponsibilityBox from "../atoms/ResponsibilityBox";

export default function ControlTemplate({
  project,
  control,
  nextControlId,
  inheritedComponentNarratives,
}) {
  const { id: projectId, acronym, title } = project;
  const {
    controlId,
    version,
    family,
    controlTitle,
    description,
    implementationStandards,
    guidance,
    responsibility,
  } = control;

  const accordionItemsProps = [
    {
      title: "CMS Implementation Standards",
      content: <p>{implementationStandards}</p>,
      expanded: false,
      id: "implementation_standards",
      headingLevel: "h3",
    },
    {
      title: "CMS Control Guidance",
      content: <p>{guidance}</p>,
      expanded: false,
      id: "control_guidance",
      headingLevel: "h3",
    },
    {
      title: "Inherited Narratives",
      content: <p>{inheritedComponentNarratives}</p>,
      expanded: false,
      id: "inherited_narratives",
      headingLevel: "h3",
    },
    {
      title: "Private (System-Specific) Narratives",
      content: (
        <Textarea
          placeholder="Add your private control narrative here."
          className={"control-page-textarea"}
        />
      ),
      expanded: false,
      id: "private_narratives",
      headingLevel: "h3",
    },
  ];

  const subtitle = `System Control: ${controlId.toUpperCase()} ${controlTitle}`;

  function getNextButtonLink() {
    let nextButtonLink = `/projects/${projectId}/controls/`;
    if (nextControlId) {
      nextButtonLink = `/projects/${projectId}/controls/${nextControlId}`;
    }
    return nextButtonLink;
  }

  return (
    <div className="control-page">
      <ProjectHeader
        id={projectId}
        acronym={acronym}
        subtitle={subtitle}
        title={title}
      />
      <p data-testid="control_version">
        <b>Version:</b> {version}
      </p>
      <p data-testid="control_family">
        <b>Control Family:</b> {family}
      </p>
      <p data-testid="control_description">
        <b>Control Description:</b> {description}
      </p>
      <ResponsibilityBox responsibility={responsibility} />
      <Accordion
        items={accordionItemsProps}
        multiselectable
        bordered
        className={"control-page-accordion"}
      />
      <hr />
      <div className="bottom-section">
        <Checkbox id="is_complete_checkbox" label="Mark as complete" />
        <a href={getNextButtonLink()}>
          <button className="usa-button">Save & next</button>
        </a>
      </div>
    </div>
  );
}

ControlTemplate.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    acronym: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  control: PropTypes.shape({
    controlId: PropTypes.string,
    version: PropTypes.string,
    family: PropTypes.string,
    controlTitle: PropTypes.string,
    description: PropTypes.string,
    guidance: PropTypes.string,
    responsibility: PropTypes.oneOf(["none", "some", "all"]).isRequired,
  }),
  nextControlId: PropTypes.string,
};
