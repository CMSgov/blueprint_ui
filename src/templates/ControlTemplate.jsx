import { Accordion, Checkbox, Textarea } from "@trussworks/react-uswds";
import PropTypes from "prop-types";
import { createRef, useEffect, useState } from "react";
import BlueprintModal from "../atoms/BlueprintModal";
import ResponsibilityBox from "../atoms/ResponsibilityBox";
import Toggle from "../atoms/Toggle";
import Tooltip from "../atoms/Tooltip";
import { DEFAULT_CATALOG_VERSION } from "../constants";
import moreInfo from "../info.png";
import ProjectHeader from "../molecules/ProjectHeader";
import { isEmpty } from "../utils";

export default function ControlTemplate({
  project,
  control,
  component,
  submitCallback,
}) {
  const [showPrivateNarrativeBox, setShowPrivateNarrativeBox] = useState(false);
  const [notApplicable, setNotApplicable] = useState(
    control.status === "not_applicable"
  );
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
    remarks,
  } = control;
  const { responsibility, components } = component;
  const subtitle = `System Control: ${label} ${controlTitle}`;
  const existingPrivateNarrative = components.private.description || "";

  const naErrorModalRef = createRef();
  const handleNaErrorOpen = () =>
    naErrorModalRef.current?.toggleModal(undefined, true);
  const selectNaModalRef = createRef();
  const handleSelectNaOpen = () =>
    selectNaModalRef.current?.toggleModal(undefined, true);
  const deselectNaModalRef = createRef();
  const handleDeselectNaOpen = () =>
    deselectNaModalRef.current?.toggleModal(undefined, true);

  function handleDeselectModalClicks(e) {
    if (e) {
      deselectNaModalRef.current?.toggleModal(undefined, false);
      document
        .querySelector(".usa-accordion__content")
        .setAttribute("hidden", "hidden");
      document
        .querySelector(".usa-accordion__button")
        .removeAttribute("aria-expanded");
      document
        .querySelector(".usa-accordion__content")
        .setAttribute("aria-hidden", "hidden");
    } else {
      deselectNaModalRef.current?.toggleModal(undefined, false);
      setNotApplicable(true);
    }
  }

  function handleSelectModalClicks(e) {
    if (e) {
      selectNaModalRef.current?.toggleModal(undefined, false);
      document.querySelector("#remarks").removeAttribute("hidden");
      document
        .querySelector("#remarks")
        .setAttribute("aria-expanded", "expanded");
      document.querySelector("#remarks").removeAttribute("aria-hidden");
    } else {
      selectNaModalRef.current?.toggleModal(undefined, false);
      setNotApplicable(false);
    }
  }

  function handleEmptyRemarksModalClicks(e) {
    if (e) {
      naErrorModalRef.current?.toggleModal(undefined, false);
      document.querySelector("#remarks").removeAttribute("hidden");
      document
        .querySelector("#remarks")
        .setAttribute("aria-expanded", "expanded");
      document.querySelector("#remarks").removeAttribute("aria-hidden");
    } else {
      naErrorModalRef.current?.toggleModal(undefined, false);
      setNotApplicable(false);
    }
  }

  let tooltipContent =
    "Add a text field to tell us how your system is addressing this control";

  let naTooltipContent =
    "Non-applicable controls will not be included in your System Security Plan";

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
          name={"private-narrative"}
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
    let na = document.getElementById("toggle-switch").checked;
    if (na) {
      newStatus = "not_applicable";
    } else if (isCompleteChecked) {
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
    let sendIt = true;
    if (showPrivateNarrativeBox) {
      patchComponentVariables = createPatchComponentVariables();
    }

    let patchControlVariables = {
      project_id: projectId,
      control_id: controlId,
      status: notApplicable
        ? "not_applicable"
        : getNewStatus(document.getElementById("is-complete-checkbox").checked),
    };

    if (notApplicable) {
      let remarks = document.getElementById("textarea-na-remarks").value;
      if (!remarks) {
        sendIt = false;
        handleNaErrorOpen();
      } else {
        patchControlVariables["remarks"] = remarks;
      }
    }

    if (sendIt) {
      submitCallback(patchComponentVariables, patchControlVariables);
    }
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

  function onChangeNA(e) {
    let is_na = e.target.checked;
    if (is_na) {
      handleSelectNaOpen();
    } else {
      handleDeselectNaOpen();
    }
    setNotApplicable(is_na);
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
      <div className={"display-flex"}>
        <Toggle isOn={notApplicable} onChange={onChangeNA} />
        <div className="display-inline margin-left-1">
          {notApplicable ? (
            <>
              <b>Non-applicable Control:</b> Toggle this control on if it
              applies to your system
            </>
          ) : (
            <>
              <b>Applicable Control:</b> Toggle this control off if it does not
              apply to your system
            </>
          )}
          <div className="tooltip-div margin-left-1">
            <Tooltip content={naTooltipContent} direction="down">
              <img type="button" src={moreInfo} alt="More info." />
            </Tooltip>
          </div>
        </div>
      </div>
      <ResponsibilityBox responsibilityForControl={responsibility} />
      {notApplicable ? (
        <Accordion
          items={[
            {
              title: "Non-applicable control justification",
              content: (
                <Textarea
                  id="textarea-na-remarks"
                  placeholder="Describe why this control is not applicable to your system project."
                  className={"control-page-textarea"}
                  name={"remarks"}
                  defaultValue={remarks}
                />
              ),
              expanded: true,
              id: "remarks",
              headingLevel: "h3",
            },
          ]}
          multiselectable
          bordered
          className={"control-page-accordion"}
        />
      ) : (
        <Accordion
          items={accordionItemsProps}
          multiselectable
          bordered
          className={"control-page-accordion"}
        />
      )}
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
          name={"is-complete"}
          label="Mark as complete"
          defaultChecked={status === "complete"}
        />
        <button className="usa-button" onClick={(e) => onClickNext(e)}>
          Save & next
        </button>
      </div>
      <BlueprintModal
        id={"na-error"}
        ref={naErrorModalRef}
        header={"Non-applicable controls must have documented justifications."}
        button={"Go back"}
        link={"Continue without saving"}
        clickHandler={handleEmptyRemarksModalClicks}
      />
      <BlueprintModal
        id={"select-na"}
        ref={selectNaModalRef}
        header={"Are you sure you want to disable this narrative?"}
        body={
          "This will remove it from your System Security Plan. You can choose to enable it later if needed. This could affect the inheritance state of this control."
        }
        button={"Disable"}
        link={"Go back"}
        clickHandler={handleSelectModalClicks}
      />
      <BlueprintModal
        id={"deselect-na"}
        ref={deselectNaModalRef}
        header={"Are you sure you want to enable this narrative?"}
        body={
          "This will add it back into your System Security Plan. You can choose to disable it later if needed. This could affect the inheritance state of this control."
        }
        button={"Enable"}
        link={"Go back"}
        clickHandler={handleDeselectModalClicks}
      />
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
