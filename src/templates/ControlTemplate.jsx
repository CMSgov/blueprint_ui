import PropTypes from "prop-types";
import { Accordion, Checkbox, Textarea } from "@trussworks/react-uswds";
import ProjectHeader from "../molecules/ProjectHeader";
import ResponsibilityBox from "../atoms/ResponsibilityBox";
import { isEmpty } from "../utils";
import Config from "../config";
import RequestService from "../services/RequestService";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";

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

export default function ControlTemplate({ project, control, componentData }) {
  const { controlId } = useParams();
  const [response, setResponse] = useState(false);
  const { id: projectId, acronym, title } = project;
  const {
    label,
    title: controlTitle,
    description,
    family,
    guidance = "No control guidance found for this control",
    implementation = "No implementation standards found for this control",
    version,
    next_id: nextControlLabel,
  } = control;
  const { responsibility, components } = componentData;
  const subtitle = `System Control: ${label.toUpperCase()} ${controlTitle}`;
  const nextLink = `/projects/${projectId}/controls/${nextControlLabel}`;
  let accordionItemsProps = [
    {
      title: "CMS Implementation Standards",
      content: <p>{implementation}</p>,
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

  function postControlUpdate(postVariables) {
    RequestService.post(
      `${Config("backendUrl")}/projects/${projectId}/controls/${controlId}/`, // @TODO: need a real endpoint here
      JSON.stringify(postVariables),
      (response) => {
        console.log(response);
        setResponse(true);
        // @TODO: handle response
      }
    );
  }

  function onClickNext() {
    let postVariables = {};
    postVariables["project_id"] = projectId;
    postVariables["mark_completed"] = document.getElementById(
      "is-complete-checkbox"
    ).checked;
    postVariables["private_narrative"] = document.getElementById(
      "textarea-private-narrative"
    ).value;
    console.log(postVariables);
    postControlUpdate(postVariables);
  }
  let saved = false;
  if (response) {
    saved = true;
  }

  return (
    <div className="control-page">
      {saved && <Navigate to={nextLink} />}
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
        <Checkbox id="is-complete-checkbox" label="Mark as complete" />
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
    title: PropTypes.string,
    description: PropTypes.string,
    family: PropTypes.string,
    guidance: PropTypes.string,
    implementation: PropTypes.string,
    version: PropTypes.string,
    next_id: PropTypes.string,
  }).isRequired,
  componentData: PropTypes.shape({
    components: PropTypes.object,
    responsibility: PropTypes.oneOf(["Inherited", "Hybrid", "Allocated"])
      .isRequired,
  }),
};
