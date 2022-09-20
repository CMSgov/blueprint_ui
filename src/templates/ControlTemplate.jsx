import PropTypes from "prop-types";
import { Accordion, Checkbox, Textarea } from "@trussworks/react-uswds";
import { DEFAULT_CATALOG_VERSION } from "../constants";
import ProjectHeader from "../molecules/ProjectHeader";
import ResponsibilityBox from "../atoms/ResponsibilityBox";
import { isEmpty } from "../utils";

const InheritedComponentNarratives = ({ inherited }) => {
  if (inherited === undefined) {
    return "";
  }
  return (
    <>
      {Object.keys(inherited).map((component, i) => (
        <div key={i}>
          <b>{component}</b>
          <p>{inherited[component].description}</p>
        </div>
      ))}
    </>
  );
};

export default function ControlTemplate({
  project,
  control,
  component,
  submitCallback,
}) {
  const { id: projectId, acronym, title } = project;
  const {
    id: controlId,
    controlIdName,
    title: controlTitle,
    description,
    family,
    guidance,
    label,
    implementation,
    status,
    version,
  } = control;
  const { responsibility, components } = component;
  const subtitle = `System Control: ${label} ${controlTitle}`;

  let accordionItemsProps = [
    {
      title: "CMS Implementation Standards",
      content: (
        <p>
          {implementation ||
            "No implementation standards found for this control."}
        </p>
      ),
      expanded: false,
      id: "implementation_standards",
      headingLevel: "h3",
    },
    {
      title: "CMS Control Guidance",
      content: (
        <p>{guidance || "No control guidance found for this control."}</p>
      ),
      expanded: false,
      id: "control_guidance",
      headingLevel: "h3",
    },
    {
      title: "Inherited Narratives",
      content: (
        <InheritedComponentNarratives inherited={components.inherited} />
      ),
      expanded: false,
      id: "inherited_narratives",
      headingLevel: "h3",
    },
    {
      title: "Private (System-Specific) Narratives",
      content: (
        <Textarea
          id="textarea-private-narrative"
          placeholder="Add your private control narrative here."
          className={"control-page-textarea"}
          defaultValue={components.private.description}
        />
      ),
      expanded: false,
      id: "private_narratives",
      headingLevel: "h3",
    },
  ];

  if (isEmpty(components.inherited)) {
    delete accordionItemsProps[2];
  }

  function getNewStatus(isCompleteChecked) {
    let newStatus;
    if (isCompleteChecked) {
      newStatus = "completed";
    } else {
      newStatus = "incomplete";
    }
    return newStatus;
  }

  function onClickNext() {
    let postComponentVariables = {
      catalog_version: DEFAULT_CATALOG_VERSION,
      controls: [controlIdName],
    };
    let privateNarrativeText = document.getElementById(
      "textarea-private-narrative"
    ).value;
    if (privateNarrativeText) {
      postComponentVariables.action = "add";
      postComponentVariables.description = privateNarrativeText;
    } else {
      postComponentVariables.action = "remove";
    }

    let postControlVariables = {
      project_id: projectId,
      control_id: controlId,
      status: getNewStatus(
        document.getElementById("is-complete-checkbox").checked
      ),
    };

    submitCallback(postComponentVariables, postControlVariables);
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
      <p className="control-description" data-testid="control_description">
        <b>Control Description:</b> {description}
      </p>
      <ResponsibilityBox responsibilityForControl={responsibility} />
      <Accordion
        items={accordionItemsProps}
        multiselectable
        bordered
        className={"control-page-accordion"}
      />
      <hr />
      <div className="bottom-section">
        <Checkbox
          id="is-complete-checkbox"
          label="Mark as complete"
          defaultChecked={status === "completed"}
        />
        <button className="usa-button" onClick={onClickNext}>
          Save & next
        </button>
      </div>
    </div>
  );
}

ControlTemplate.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    acronym: PropTypes.string,
    private_component: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
  control: PropTypes.shape({
    id: PropTypes.number,
    controlIdName: PropTypes.string,
    description: PropTypes.string,
    family: PropTypes.string,
    guidance: PropTypes.string,
    implementation: PropTypes.string,
    next_id: PropTypes.string,
    status: PropTypes.oneOf(["not_started", "incomplete", "completed"]),
    title: PropTypes.string,
    version: PropTypes.string,
  }).isRequired,
  component: PropTypes.shape({
    components: PropTypes.object,
    responsibility: PropTypes.oneOf(["Inherited", "Hybrid", "Allocated", null]),
  }),
  submitCallback: PropTypes.func,
};
