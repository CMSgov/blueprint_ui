import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import ProjectSetupConfirmation from "./ProjectSetupConfirmation";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { config } from "../config";
import { GlobalStateProvider } from "../GlobalState";

const pageData = {
  id: 1,
  title: "Richard Moore 1",
  acronym: "rm1",
  impact_level: "low",
  location: "cms_aws",
  status: "active",
  components: [
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
  ],
  components_count: 3,
};
const ERROR_MESSAGE = "Error loading project components";

test("renders the LoadingIcon when waiting for data, then renders the pageTemplate when page data is successfully returned", async () => {
  const project = {
    title: "Test Project",
    acronym: "TP",
    id: 1,
  };
  localStorage.setItem("project", JSON.stringify(project));
  let mock = new MockAdapter(axios);
  mock
    .onGet(`${config.backendUrl}/projects/${pageData.id}/`)
    .reply(200, pageData);

  render(
    <MemoryRouter initialEntries={[`/project-setup/confirmation`]}>
      <GlobalStateProvider>
        <Routes>
          <Route
            path="project-setup/confirmation"
            element={<ProjectSetupConfirmation />}
          />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );
  expect(screen.getByTestId("loading_indicator")).toBeInTheDocument();
  expect(screen.queryByText(ERROR_MESSAGE)).toBeNull();
  const expectedTitle = "Inherited policies and procedures";
  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getAllByText(expectedTitle);
  });
});

// this test passes when running all test, but fails running individually :/
test.skip("renders the ErrorMessage when page data is NOT successfully returned", async () => {
  const nonExistentId = 0;
  localStorage.setItem("project", JSON.stringify({ id: 0 }));
  let mock = new MockAdapter(axios);
  mock.onGet(`${config.backendUrl}/projects/${nonExistentId}/`).reply(404);

  render(
    <MemoryRouter initialEntries={[`/project-setup/confirmation`]}>
      <GlobalStateProvider>
        <Routes>
          <Route
            path="project-setup/confirmation"
            element={<ProjectSetupConfirmation />}
          />
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
