import { render, screen, within, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import ControlTemplate from "./ControlTemplate";

const projectData = {
  title: "Test Project",
  acronym: "TP",
  id: 1,
};
const controlData = {
  id: 70,
  controlIdName: "ac-1",
  label: "AC-01",
  title: "Access Control Policy and Procedures",
  version: "5",
  family: "ac",
  description: "some stuff",
  guidance:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  implementationStandards:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  next_id: "ac-2",
};
const componentData = {
  responsibility: "Allocated",
  components: {
    inherited: {
      AWS: {
        description:
          "CMS Cloud provides a check in the Inspec profile to ensure that systems are configured to display the approved CMS system notification.",
      },
    },
    private: {
      description: "I did whatever I wanted.",
    },
  },
};

test("clicking next triggers correct function", () => {
  const submitCallback = jest.fn();
  render(
    <MemoryRouter>
      <ControlTemplate
        project={projectData}
        control={controlData}
        component={componentData}
        submitCallback={submitCallback}
      />
    </MemoryRouter>
  );
  fireEvent.click(screen.getByText("Save & next"));
  expect(submitCallback).toHaveBeenCalledTimes(1);
});

test("renders each section on the page", () => {
  render(
    <MemoryRouter>
      <ControlTemplate
        project={projectData}
        control={controlData}
        component={componentData}
      />
    </MemoryRouter>
  );

  const expectedVersion = `Version: ${controlData.version}`;
  const expectedFamily = `Control Family: ${controlData.family}`;
  const expectedDescription = `Control Description: ${controlData.description}`;

  expect(screen.getByTestId("control_version")).toHaveTextContent(
    expectedVersion
  );
  expect(screen.getByTestId("control_family")).toHaveTextContent(
    expectedFamily
  );
  expect(screen.getByTestId("control_description")).toHaveTextContent(
    expectedDescription
  );
  expect(screen.getByTestId("responsibility_box")).toBeInTheDocument();

  const accordionSections = screen.getAllByTestId("accordion");
  const topAccordionItems = accordionSections[0];
  const privateNarrativeAccordion = accordionSections[1];

  const implementationAccordion = within(topAccordionItems).getByText(
    "CMS Implementation Standards"
  );
  const guidanceAccordion = within(topAccordionItems).getByText(
    "CMS Control Guidance"
  );
  const inheritedNarrativesAccordion = within(topAccordionItems).getByText(
    "Inherited Narratives"
  );
  const privateNarrativesAccordion = within(
    privateNarrativeAccordion
  ).getByText("Private (System-Specific) Narratives");
  const expectedSubtitle = `System Control: ${controlData.label} ${controlData.title}`;
  const buttonElement = screen.getByText("Save & next");
  expect(implementationAccordion).toBeInTheDocument();
  expect(guidanceAccordion).toBeInTheDocument();
  expect(inheritedNarrativesAccordion).toBeInTheDocument();
  expect(privateNarrativesAccordion).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();

  expect(screen.getByTestId("project_header_subtitle")).toHaveTextContent(
    expectedSubtitle
  );
});

test("clicking not applicable shows remarks", () => {
  render(
    <MemoryRouter>
      <ControlTemplate
        project={projectData}
        control={controlData}
        component={componentData}
      />
    </MemoryRouter>
  );

  const accordionSections = screen.getAllByTestId("accordion");
  fireEvent.click(screen.getByTestId("on-off-toggle"));
  const topAccordionItems = accordionSections[0];
  const natApplicableAccordion = within(topAccordionItems).getByText(
    "Non-applicable control justification"
  );
  expect(natApplicableAccordion).toBeInTheDocument();
});
