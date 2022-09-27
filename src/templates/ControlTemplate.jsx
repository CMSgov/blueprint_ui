import PropTypes from "prop-types";
import { Accordion, Checkbox, Textarea } from "@trussworks/react-uswds";
import { useEffect, useState } from "react";
import { DEFAULT_CATALOG_VERSION } from "../constants";
import ProjectHeader from "../molecules/ProjectHeader";
import ResponsibilityBox from "../atoms/ResponsibilityBox";
import { isEmpty } from "../utils";
import moreInfo from "../info.png";
import Tooltip from "../atoms/Tooltip";

export default function ControlTemplate({
  project,
  control,
  component,
  submitCallback,
}) {
  const [showPrivateNarrativeBox, setShowPrivateNarrativeBox] = useState(false);

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
  const existingPrivateNarrative = components.private.description || "";

  let tooltipContent =
    "Add a text field to tell us how your system is addressing this control";

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
      content: renderInheritedComponentNarratives(),
      expanded: false,
      id: "inherited_narratives_accordion",
      headingLevel: "h3",
    },
  ];

  let accordionPrivateNarrativeProps = [
    {
      title: "Private (System-Specific) Narratives",
      content: (
        <Textarea
          id="textarea-private-narrative"
          placeholder="Add your private control narrative here."
          className={"control-page-textarea"}
          defaultValue={existingPrivateNarrative}
        />
      ),
      expanded: true,
      id: "private_narratives",
      headingLevel: "h3",
    },
  ];

  useEffect(() => {
    if (components.private.description || "") {
      setShowPrivateNarrativeBox(true);
    }
  }, [components]);

  const getNewStatus = (isCompleteChecked) => {
    let newStatus;
    if (isCompleteChecked) {
      newStatus = "complete";
    } else {
      newStatus = "incomplete";
    }
    return newStatus;
  };

  // when new private narrative is different from existing private narrative,
  // builds out and returns variables for patch request
  // otherwise returns falsy
  const createPatchComponentVariables = () => {
    let newNarrative = document.getElementById(
      "textarea-private-narrative"
    ).value;
    if (newNarrative === existingPrivateNarrative) {
      return;
    }

    let patchComponentVariables = {
      catalog_version: DEFAULT_CATALOG_VERSION,
      controls: [controlIdName],
    };
    if (newNarrative) {
      patchComponentVariables.action = "add";
      patchComponentVariables.description = newNarrative;
    } else {
      patchComponentVariables.action = "remove";
    }
    return patchComponentVariables;
  };

  function onClickNext() {
    let patchComponentVariables;
    if (showPrivateNarrativeBox) {
      patchComponentVariables = createPatchComponentVariables();
    }

    let patchControlVariables = {
      project_id: projectId,
      control_id: controlId,
      status: getNewStatus(
        document.getElementById("is-complete-checkbox").checked
      ),
    };

    submitCallback(patchComponentVariables, patchControlVariables);
  }

  function renderInheritedComponentNarratives() {
    const inheritedComponentNarratives = components.inherited;
    if (isEmpty(inheritedComponentNarratives)) {
      return (
        <p id="no-inherited-narrative-msg">You have no inherited narratives.</p>
      );
    }
    return (
      <>
        {Object.keys(inheritedComponentNarratives).map((component, i) => (
          <div key={i} className="inherited-narrative">
            <b>{component}</b>
            <p>{inheritedComponentNarratives[component].description}</p>
          </div>
        ))}
      </>
    );
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
      {showPrivateNarrativeBox ? (
        <Accordion
          items={accordionPrivateNarrativeProps}
          bordered
          className={"control-page-accordion"}
        />
      ) : (
        <div className="additional-narrative-section">
          <button
            className="usa-button usa-button--outline margin-top-4"
            onClick={() => setShowPrivateNarrativeBox(true)}
          >
            Write an additional narrative
          </button>
          <div className="tooltip-div">
            <Tooltip content={tooltipContent} direction="right">
              <img type="button" src={moreInfo} alt="More info." />
            </Tooltip>
          </div>
        </div>
      )}
      <hr />
      <div className="bottom-section">
        <Checkbox
          id="is-complete-checkbox"
          label="Mark as complete"
          defaultChecked={status === "complete"}
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
    status: PropTypes.oneOf(["not_started", "incomplete", "complete"]),
    title: PropTypes.string,
    version: PropTypes.string,
  }).isRequired,
  component: PropTypes.shape({
    components: PropTypes.object,
    responsibility: PropTypes.oneOf(["Inherited", "Hybrid", "Allocated", null]),
  }),
  submitCallback: PropTypes.func,
};
