import PropTypes from "prop-types";
import { Accordion, Checkbox, Textarea } from "@trussworks/react-uswds";
import ProjectHeader from "../molecules/ProjectHeader";
import ResponsibilityBox from "../atoms/ResponsibilityBox";
import { isEmpty } from "../utils";
import Toggle from "../atoms/Toggle";
import { useState } from "react";

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
  componentData,
  submitCallback,
}) {
  const [notApplicable, setNotApplicable] = useState(
    control.status == "not_applicable"
  );
  const { id: projectId, acronym, title } = project;
  const {
    id: controlId,
    label,
    title: controlTitle,
    description,
    family,
    guidance,
    implementation,
    status,
    version,
    remarks,
  } = control;

  const { responsibility, components } = componentData;
  const subtitle = `System Control: ${label.toUpperCase()} ${controlTitle}`;

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
          name={"private_statement"}
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
    let na = document.getElementById("toggle-switch").checked;
    if (na) {
      newStatus = "not_applicable";
    } else if (isCompleteChecked) {
      newStatus = "completed";
    } else {
      newStatus = "incomplete";
    }
    return newStatus;
  }

  function onClickNext() {
    let postVariables = {};
    postVariables["project_id"] = projectId;
    postVariables["control_id"] = controlId;
    postVariables["status"] = getNewStatus(
      document.getElementById("is-complete-checkbox").checked
    );

    if (postVariables["status"] === "not_applicable") {
      let remarks = document.getElementById("textarea-na-remarks").value;
      if (!remarks) {
        // Trigger modal here.
        alert("Status is na and no remark");
      }
      postVariables["remarks"] = remarks;
    } else {
      postVariables["private_narrative"] = document.getElementById(
        "textarea-private-narrative"
      ).value;
    }
    submitCallback(postVariables);
  }

  function onChangeNA(e) {
    let is_na = e.target.checked;
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
      <div className="display-flex">
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
                  value={remarks}
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
      <hr />
      <div className="bottom-section">
        <Checkbox
          id="is-complete-checkbox"
          label="Mark as complete"
          defaultChecked={status === "completed"}
          name={"status"}
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
    title: PropTypes.string,
  }).isRequired,
  control: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    family: PropTypes.string,
    guidance: PropTypes.string,
    implementation: PropTypes.string,
    next_id: PropTypes.string,
    status: PropTypes.oneOf([
      "not_started",
      "incomplete",
      "completed",
      "not_applicable",
    ]),
    title: PropTypes.string,
    version: PropTypes.string,
  }).isRequired,
  componentData: PropTypes.shape({
    components: PropTypes.object,
    responsibilityForControl: PropTypes.oneOf([
      "Inherited",
      "Hybrid",
      "Allocated",
      null,
    ]),
  }),
  submitCallback: PropTypes.func,
};
