import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import ProjectSetupSelectComponents from "./ProjectSetupSelectComponents";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { config } from "../config";
import { GlobalStateProvider } from "../GlobalState";

const pageData = [
  {
    id: 3,
    title: "Blueprint",
    description: "Blueprint",
    type: "software",
    catalog: 1,
    controls_count: 36,
  },
  {
    id: 4,
    title: "Django",
    description: "Django",
    type: "software",
    catalog: 1,
    controls_count: 7,
  },
  {
    id: 5,
    title: "IDM",
    description: "Identity Management",
    type: "software",
    catalog: 1,
    controls_count: 35,
  },
  {
    id: 6,
    title: "Splunk",
    description: "Splunk",
    type: "software",
    catalog: 1,
    controls_count: 20,
  },
  {
    id: 7,
    title: "Tenable Nessus",
    description: "Tenable Nessus",
    type: "software",
    catalog: 1,
    controls_count: 11,
  },
  {
    id: 8,
    title: "Trendmicro",
    description: "Trend Micro Deep Security",
    type: "software",
    catalog: 1,
    controls_count: 18,
  },
];
const ERROR_MESSAGE = "Error loading components for project setup";

test("renders the LoadingIcon when waiting for data, then renders the pageTemplate when page data is successfully returned", async () => {
  const project = {
    title: "Test Project",
    acronym: "TP",
    id: 1,
  };
  localStorage.setItem("project", JSON.stringify(project));
  let mock = new MockAdapter(axios);
  mock
    .onGet(`${config.backendUrl}/projects/${project.id}/components-not-added/`)
    .reply(200, pageData);

  render(
    <MemoryRouter
      initialEntries={[`/project-setup/confirmation/select-components`]}
    >
      <GlobalStateProvider>
        <Routes>
          <Route
            path="project-setup/confirmation/select-components"
            element={<ProjectSetupSelectComponents />}
          />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );
  // expect(screen.getByTestId("loading_indicator")).toBeInTheDocument();
  expect(screen.queryByText(ERROR_MESSAGE)).toBeNull();
  const expectedTitle = "Select components for your system technologies";
  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getAllByText(expectedTitle);
  });
});

test("renders the ErrorMessage when page data is NOT successfully returned", async () => {
  const nonExistentId = 0;
  localStorage.setItem("project", JSON.stringify({ id: 0 }));
  let mock = new MockAdapter(axios);
  mock
    .onGet(
      `${config.backendUrl}/projects/${nonExistentId}/components-not-added/`
    )
    .reply(404);

  render(
    <MemoryRouter
      initialEntries={[`/project-setup/confirmation/select-components`]}
    >
      <GlobalStateProvider>
        <Routes>
          <Route
            path="project-setup/confirmation/select-components"
            element={<ProjectSetupSelectComponents />}
          />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );
  // expect(screen.getByTestId("loading_indicator")).toBeInTheDocument();
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
