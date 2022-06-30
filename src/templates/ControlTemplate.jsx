import ProjectHeader from "../molecules/ProjectHeader";
import ResponsibilityBox from "../atoms/ResponsibilityBox";
import { Accordion, Textarea } from "@trussworks/react-uswds";

// const sampleData = {
//   controlId: "ac-1", version: "5", family: "ac", description: "some stuff" }

export function ControlTemplate({ project, control }) {
  const { id, acronym, title } = project;
  const {
    controlId,
    version,
    family,
    name,
    description,
    guidance,
    responsibility,
  } = control;
  // const { controlId, version, family, name, description, narrative } = control;

  const accordionItemsProps = [
    {
      title: "CMS Implementation Standards",
      content: <p>{guidance}</p>,
      expanded: false,
      id: "implementation-standards",
      headingLevel: "h3",
    },
    {
      title: "CMS Control Guidance",
      content: <p>{guidance}</p>,
      expanded: false,
      id: "control-guidance",
      headingLevel: "h3",
    },
    {
      title: "Inherited Narratives",
      content: <p>{guidance}</p>,
      expanded: false,
      id: "inherited-narratives",
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
      id: "private-narratives",
      headingLevel: "h3",
    },
  ];

  const subtitle = `System Control: ${controlId}`;
  return (
    <div className="project-page control-page">
      <ProjectHeader
        id={id}
        acronym={acronym}
        subtitle={subtitle}
        title={title}
      />
      <p>
        <b>Version:</b> {version}
      </p>
      <p>
        <b>Control Family:</b> {family}
      </p>
      <p>
        <b>Control Description:</b> {description}
      </p>
      <ResponsibilityBox responsibility={1} />
      <Accordion
        items={accordionItemsProps}
        multiselectable
        bordered
        className={"control-page-accordion"}
      />
      <hr />
      <a href={`/projects/${id}/controls`}>
        <button className="usa-button">Save & next</button>
      </a>
    </div>
  );
}
