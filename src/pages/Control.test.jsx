import { act } from "react-dom/test-utils";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import Control from "./Control";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { config } from "../config";
import { GlobalStateProvider } from "../GlobalState";

const projectData = {
  project: {
    id: 21,
    title: "Name Full Test",
    acronym: "NFT",
  },
  catalog_data: {
    label: "AC-01",
    title: "Access Control Policy and Procedures",
    family: "Access Control",
    description: "",
    implementation: "",
    guidance: "This control addresses ",
    version: "CMS_ARS_3_1_catalog",
    next_id: "",
  },
  component_data: {
    responsibility: "Hybrid",
    components: {
      inherited: {
        OCISO: {
          description: "This is a hybrid control.",
          responsibility: "Hybrid",
          provider: "Yes",
        },
        AWS: {
          description: "CMS Cloud is responsible",
          responsibility: "Hybrid",
          provider: "Yes",
        },
      },
      private: {},
    },
  },
};

test("renders the LoadingIcon when waiting for data, then renders the pageTemplate when project data is successfully returned", async () => {
  let mock = new MockAdapter(axios);
  const controlId = "ac-1";
  const projectId = projectData.project.id;
  mock
    .onGet(`${config.backendUrl}/projects/${projectId}/controls/${controlId}/`)
    .reply(200, projectData);

  render(
    <MemoryRouter
      initialEntries={[`/projects/${projectId}/controls/${controlId}`]}
    >
      <GlobalStateProvider>
        <Routes>
          <Route
            path="projects/:id/controls/:controlId"
            element={<Control />}
          />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );
  screen.getByTestId("loading_indicator");
  const expectedTitle = `${projectData.project.title} (${projectData.project.acronym})`;
  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getByText(expectedTitle);
  });
  // checks that project template has rendered
  expect(screen.getByTestId("project_header_subtitle")).toHaveTextContent(
    "System Control: AC-01 Access Control Policy and Procedures"
  );
});

test("renders the ErrorMessage when projects data is NOT successfully returned", async () => {
  const nonExistentProjectId = 0;
  const controlId = "ac-1";
  let mock = new MockAdapter(axios);
  mock
    .onGet(
      `${config.backendUrl}/projects/${nonExistentProjectId}/controls/${controlId}`
    )
    .reply(401);

  render(
    <MemoryRouter
      initialEntries={[
        `/projects/${nonExistentProjectId}/controls/${controlId}`,
      ]}
    >
      <GlobalStateProvider>
        <Routes>
          <Route
            path="projects/:id/controls/:controlId"
            element={<Control />}
          />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );

  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getByText("Error loading project control");
    // checks that ErrorMessage component has rendered
    const errorMessage = screen.getByTestId("error_message");
    expect(within(errorMessage).getByRole("heading")).toHaveTextContent(
      "Error"
    );
  });
});

test("renders the the page and marks control as completed and clicks next", async () => {
  let mock = new MockAdapter(axios);
  const controlId = "ac-1";
  const projectId = projectData.project.id;
  mock
    .onGet(`${config.backendUrl}/projects/${projectId}/controls/${controlId}/`)
    .reply(200, projectData);
  mock
    .onPost(`${config.backendUrl}/projects/${projectId}/controls/${controlId}/`)
    .reply(200, projectData);

  render(
    <MemoryRouter
      initialEntries={[`/projects/${projectId}/controls/${controlId}`]}
    >
      <GlobalStateProvider>
        <Routes>
          <Route
            path="projects/:id/controls/:controlId"
            element={<Control />}
          />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );
  const expectedTitle = `${projectData.project.title} (${projectData.project.acronym})`;
  await waitFor(() => {
    screen.getByText(expectedTitle);
  });

  const checkbox = screen.getByLabelText("Mark as complete");
  fireEvent.click(checkbox);
  // await fireEvent.click(screen.getByRole("button", { name: "Save & next" }));
});
