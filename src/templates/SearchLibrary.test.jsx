import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchLibrary from "./SearchLibrary";

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

const typeList = [["software"], ["service"]];

test("renders page with link to component library", () => {
  render(
    <SearchLibrary
      componentList={componentList}
      totalItemCount={5}
      linkToComponentLibrary={true}
    />,
    {
      wrapper: MemoryRouter,
    }
  );

  const linkToComponentLibrary = screen.getByText(
    "Add from the Component Library"
  );
  expect(linkToComponentLibrary).toBeInTheDocument();
});

test("renders page with out link to component library", () => {
  render(
    <SearchLibrary
      componentList={componentList}
      totalItemCount={5}
      typeList={typeList}
    />,
    {
      wrapper: MemoryRouter,
    }
  );
  const linkToComponentLibrary = screen.queryByText(
    "Add from the Component Library"
  );
  expect(linkToComponentLibrary).toBeNull();
});

test("renders page with type filters", () => {
  render(
    <SearchLibrary
      componentList={componentList}
      totalItemCount={5}
      typeList={typeList}
    />,
    {
      wrapper: MemoryRouter,
    }
  );
  const labelSoftware = screen.getByLabelText("software");
  const labelService = screen.getByLabelText("service");
  expect(labelSoftware).toBeInTheDocument();
  expect(labelService).toBeInTheDocument();
});

test("renders page with out type filters", () => {
  render(<SearchLibrary componentList={componentList} totalItemCount={5} />, {
    wrapper: MemoryRouter,
  });
  const labelSoftware = screen.queryByLabelText("software");
  const labelService = screen.queryByLabelText("service");
  expect(labelSoftware).toBeNull();
  expect(labelService).toBeNull();
});
