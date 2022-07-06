import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import ControlTemplate from "./ControlTemplate";

const projectData = {
  title: "Test Project",
  acronym: "TP",
  id: 1,
};
const controlData = {
  controlId: "ac-1",
  controlTitle: "Access Control Policy and Procedures",
  version: "5",
  family: "ac",
  description: "some stuff",
  responsibility: "all",
  guidance:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  implementationStandards:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
};
const nextControlId = "ac-2";
const inheritedComponentNarratives =
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

test("subtitle displays with capitalized control id and control title", () => {
  render(
    <MemoryRouter>
      <ControlTemplate
        project={projectData}
        control={controlData}
        nextControlId={nextControlId}
      />
    </MemoryRouter>
  );

  const capitalizedControlId = "AC-1";
  const expectedSubtitle = `System Control: ${capitalizedControlId} ${controlData.controlTitle}`;

  expect(screen.getByTestId("project_header_subtitle")).toHaveTextContent(
    expectedSubtitle
  );
});

test("save & next button links to next control page when nextControlId is passed in", () => {
  render(
    <MemoryRouter>
      <ControlTemplate
        project={projectData}
        control={controlData}
        nextControlId={nextControlId}
      />
    </MemoryRouter>
  );

  const expectedLinkToNextControl = `/projects/${projectData.id}/controls/${nextControlId}`;

  const linkElement = screen.getByRole("link", { name: "Save & next" });
  expect(linkElement).toHaveAttribute("href", expectedLinkToNextControl);
});

test("save & next button links to project controls page when nextControlId is NOT passed in", () => {
  render(
    <MemoryRouter>
      <ControlTemplate project={projectData} control={controlData} />
    </MemoryRouter>
  );

  const expectedLinkToNextControl = `/projects/${projectData.id}/controls/`;

  const linkElement = screen.getByRole("link", { name: "Save & next" });
  expect(linkElement).toHaveAttribute("href", expectedLinkToNextControl);
});
