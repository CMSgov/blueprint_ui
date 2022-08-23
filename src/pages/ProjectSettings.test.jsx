// WIP test file
// ProjectSettings uses Context and we need a way to test the changes to Context

import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import ProjectSettings from "./ProjectSettings";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { config } from "../config";
import { GlobalStateProvider } from "../GlobalState";
const ERROR_MESSAGE = "Error loading project settings";

test("renders the ProjectSettingsTemplate page when project data is successfully returned", async () => {
  const projectData = {
    title: "Test Project",
    acronym: "TP",
    id: 1,
  };
  let mock = new MockAdapter(axios);
  mock
    .onGet(`${config.backendUrl}/projects/${projectData.id}/`)
    .reply(200, projectData);

  render(
    <MemoryRouter initialEntries={[`/projects/${projectData.id}/`]}>
      <GlobalStateProvider>
        <Routes>
          <Route path="projects/:id" element={<ProjectSettings />} />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );
  expect(screen.getByTestId("loading_indicator")).toBeInTheDocument();
  expect(screen.queryByText(ERROR_MESSAGE)).toBeNull();
  const expectedTitle = `${projectData.title} (${projectData.acronym})`;
  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getByText(expectedTitle);
    // checks that project template has rendered
    const projectTemplate = screen.getByTestId("project_settings_page");
    expect(
      within(projectTemplate).getByTestId("project_header_subtitle")
    ).toHaveTextContent("Project Settings");
  });
});

test("renders the ErrorMessage when projects data is NOT successfully returned", async () => {
  const nonExistentProjectId = 0;

  let mock = new MockAdapter(axios);
  mock
    .onGet(`${config.backendUrl}/projects/${nonExistentProjectId}`)
    .reply(404);

  render(
    <MemoryRouter initialEntries={[`/projects/${nonExistentProjectId}/`]}>
      <GlobalStateProvider>
        <Routes>
          <Route path="projects/:id" element={<ProjectSettings />} />
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

test("renders the LoadingIcon when waiting for data", async () => {
  const projectData = {
    title: "Test Project",
    acronym: "TP",
    id: 1,
  };

  let mock = new MockAdapter(axios);
  mock
    .onGet(`${config.backendUrl}/projects/${projectData.id}/`)
    .reply(200, projectData);

  render(
    <MemoryRouter initialEntries={[`/projects/${projectData.id}/`]}>
      <GlobalStateProvider>
        <Routes>
          <Route path="projects/:id" element={<ProjectSettings />} />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );

  expect(screen.getByTestId("loading_indicator")).toBeInTheDocument();
  expect(screen.queryByText(ERROR_MESSAGE)).toBeNull();

  // allows component to finish running async code and rerender
  await waitFor(() => {
    screen.getByTestId("project_settings_page");
  });
});
