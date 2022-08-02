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

const catalogList = [
  {
    id: 1,
    name: "cms ars 3.1",
    file_name: "/media/CMS_ARS_3_1_catalog_1.json",
  },
  {
    id: 2,
    name: "cms ars 5.0",
    file_name: "/media/CMS_ARS_5_catalog_1.json",
  },
];

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

test("renders page with type & catalog filters", () => {
  render(
    <SearchLibrary
      componentList={componentList}
      totalItemCount={5}
      typeList={typeList}
      catalogList={catalogList}
    />,
    {
      wrapper: MemoryRouter,
    }
  );
  const labelSoftware = screen.getByLabelText("software");
  const labelService = screen.getByLabelText("service");
  expect(labelSoftware).toBeInTheDocument();
  expect(labelService).toBeInTheDocument();
  const labelCatalog1 = screen.getByLabelText("cms ars 3.1");
  const labelCatalog2 = screen.getByLabelText("cms ars 5.0");
  expect(labelCatalog1).toBeInTheDocument();
  expect(labelCatalog2).toBeInTheDocument();
});

test("renders page with just catalog filters", () => {
  render(
    <SearchLibrary
      componentList={componentList}
      totalItemCount={5}
      catalogList={catalogList}
    />,
    {
      wrapper: MemoryRouter,
    }
  );
  const labelSoftware = screen.queryByLabelText("software");
  const labelService = screen.queryByLabelText("service");
  expect(labelSoftware).toBeNull();
  expect(labelService).toBeNull();
  const labelCatalog1 = screen.getByLabelText("cms ars 3.1");
  const labelCatalog2 = screen.getByLabelText("cms ars 5.0");
  expect(labelCatalog1).toBeInTheDocument();
  expect(labelCatalog2).toBeInTheDocument();
});

test("renders page with out catalog filters", () => {
  render(<SearchLibrary componentList={componentList} totalItemCount={5} />, {
    wrapper: MemoryRouter,
  });
  const labelCatalog1 = screen.queryByLabelText("cms ars 3.1");
  const labelCatalog2 = screen.queryByLabelText("cms ars 5.0");
  expect(labelCatalog1).toBeNull();
  expect(labelCatalog2).toBeNull();
});
