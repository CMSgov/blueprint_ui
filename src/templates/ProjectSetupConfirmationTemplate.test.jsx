import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProjectSetupConfirmationTemplate from "./ProjectSetupConfirmationTemplate";

test("renders page", () => {
  const componentList = [
    {
      id: 3,
      title: "Test Project private",
      description: "Test Project default system component",
      type: "software",
      catalog: 1,
      controls_count: 0,
    },
    {
      id: 1,
      title: "OCISO",
      description: "OCISO Inheritable Controls",
      type: "software",
      catalog: 1,
      controls_count: 50,
    },
    {
      id: 2,
      title: "AWS",
      description: "Amazon Web Services",
      type: "software",
      catalog: 1,
      controls_count: 311,
    },
  ];
  render(
    <MemoryRouter>
      <ProjectSetupConfirmationTemplate components={componentList} />
    </MemoryRouter>
  );
  const h1 = screen.getByText("Inherited policies and procedures");
  expect(h1).toBeInTheDocument();
  const pText1 = screen.getByText(
    "Blueprint automatically adds components for systems on the CMS AWS environment. Each component includes controls for policies and procedures needed for your System Security Plan (SSP)."
  );
  expect(pText1).toBeInTheDocument();
  const pText2 = screen.getByText(
    "All included controls are fully inherited and added to your SSP. No additonal action is required."
  );
  expect(pText2).toBeInTheDocument();

  const componentListItems = screen.getByTestId("component-list");
  expect(componentListItems).toHaveTextContent(componentList[0].title);
  expect(componentListItems).toHaveTextContent(componentList[1].title);
  expect(componentListItems).toHaveTextContent(componentList[2].title);

  const link1 = screen.getByText("Back");
  expect(link1).toBeInTheDocument();
  const link2 = screen.getByText("Next");
  expect(link2).toBeInTheDocument();
});
