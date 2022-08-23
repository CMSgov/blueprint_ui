import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import Component from "./Component";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { config } from "../config";
import { GlobalStateProvider } from "../GlobalState";

const pageData = {
  id: 4,
  title: "Django",
  description: "Django",
  type: "software",
  catalog: 1,
  controls: [],
  search_terms: null,
  status: 2,
  catalog_data: {
    version: "CMS_ARS_3_1_catalog",
    controls: {},
  },
  component_data: {
    title: "Django",
    description: "Django",
    standard: "CMS_ARS_3_1",
    source:
      "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
    controls: {},
  },
  project_data: {
    add: [],
    remove: [],
  },
};

const ERROR_MESSAGE = "Error loading component";

test("renders the LoadingIcon when waiting for data, then renders the pageTemplate when page data is successfully returned", async () => {
  let mock = new MockAdapter(axios);
  mock
    .onGet(`${config.backendUrl}/components/${pageData.id}/`)
    .reply(200, pageData);

  render(
    <MemoryRouter initialEntries={[`/components/${pageData.id}`]}>
      <GlobalStateProvider>
        <Routes>
          <Route path="components/:componentId" element={<Component />} />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );
  expect(screen.queryByText(ERROR_MESSAGE)).toBeNull();
  expect(screen.getByTestId("loading_indicator")).toBeInTheDocument();

  const expectedTitle = `${pageData.title}`;
  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getAllByText(expectedTitle);
  });
});

test("renders the ErrorMessage when page data is NOT successfully returned", async () => {
  const nonExistentId = 0;
  let mock = new MockAdapter(axios);
  mock.onGet(`${config.backendUrl}/components/${nonExistentId}/`).reply(404);

  render(
    <MemoryRouter initialEntries={[`/components/${nonExistentId}`]}>
      <GlobalStateProvider>
        <Routes>
          <Route path="components/:id" element={<Component />} />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );
  expect(screen.getByTestId("loading_indicator")).toBeInTheDocument();
  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getByText(ERROR_MESSAGE);
    // checks that ErrorMessage component has rendered
    const errorMessage = screen.getByTestId("error_message");
    expect(within(errorMessage).getByRole("heading")).toHaveTextContent(
      "Error"
    );
  });
});
