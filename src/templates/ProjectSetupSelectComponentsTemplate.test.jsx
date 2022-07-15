import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProjectSetupSelectComponentsTemplate from "./ProjectSetupSelectComponentsTemplate";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "12",
  }),
}));

const projectData = {
  title: "Test Project",
  acronym: "TP",
  id: 12,
  impact_level: "low",
};
localStorage.setItem("project", JSON.stringify(projectData));
const componentList = [
  {
    id: 60,
    title: "active-directory",
    description: "Active Directory",
    type: "software",
    catalog: 1,
    component_json: {},
    controls_count: 17,
  },
  {
    id: 62,
    title: "blueprint",
    description: "Blueprint",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {},
    },
    controls_count: 36,
  },
  {
    id: 63,
    title: "blueprint gaps",
    description: "Blueprint Gaps Template",
    type: "software",
    catalog: 1,
    component_json: {},
    controls_count: 58,
  },
  {
    id: 64,
    title: "burpsuite",
    description: "BurpSuite",
    type: "software",
    catalog: 1,
    component_json: {},
    controls_count: 13,
  },
  {
    id: 65,
    title: "cloud protected manager",
    description: "Cloud Protection Manager",
    type: "software",
    catalog: 1,
    component_json: {},
    controls_count: 4,
  },
  { total_item_count: 5 },
];

global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

test("renders page", () => {
  render(
    <ProjectSetupSelectComponentsTemplate componentList={componentList} />,
    {
      wrapper: MemoryRouter,
    }
  );
  const h2 = screen.getByText("Select components for your system technologies");
  expect(h2).toBeInTheDocument();
  const tableHeader1 = screen.getByText("Component");
  expect(tableHeader1).toBeInTheDocument();
  const tableHeader2 = screen.getByText("Description");
  expect(tableHeader2).toBeInTheDocument();
  const tableHeader3 = screen.getByText("Controls");
  expect(tableHeader3).toBeInTheDocument();
  const tableData1 = screen.getByText("active-directory");
  const tableData2 = screen.getByText("Active Directory");
  expect(tableData1).toBeInTheDocument();
  expect(tableData2).toBeInTheDocument();

  const tableData3 = screen.getByText("burpsuite");
  const tableData4 = screen.getByText("BurpSuite");
  expect(tableData3).toBeInTheDocument();
  expect(tableData4).toBeInTheDocument();

  const link1 = screen.getByText("Back");
  expect(link1).toBeInTheDocument();
  const link2 = screen.getByText("Confirm");
  expect(link2).toBeInTheDocument();
});
