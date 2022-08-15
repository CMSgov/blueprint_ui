import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import ProjectComponents from "./ProjectComponents";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { config } from "../config";
import { GlobalStateProvider } from "../GlobalState";

const pageData = {
  project: {
    id: 21,
    title: "Name Full Test",
    acronym: "NFT",
    impact_level: "high",
    creator: 2,
    location: "cms_aws",
    catalog: 1,
  },
  components: [
    {
      id: 1,
      title: "OCISO",
      description: "OCISO Inheritable Controls",
      type: "software",
      catalog: 1,
      controls_count: 50,
    },
  ],
  total_item_count: 2,
  type_list: [["software"]],
};

test("renders the LoadingIcon when waiting for data, then renders the pageTemplate when page data is successfully returned", async () => {
  let mock = new MockAdapter(axios);
  mock
    .onGet(`${config.backendUrl}/projects/${pageData.project.id}/search/`)
    .reply(200, pageData);

  render(
    <MemoryRouter
      initialEntries={[`/projects/${pageData.project.id}/components`]}
    >
      <GlobalStateProvider>
        <Routes>
          <Route
            path="projects/:id/components"
            element={<ProjectComponents />}
          />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );
  screen.getByTestId("loading_indicator");
  const expectedTitle = `${pageData.project.title} (${pageData.project.acronym})`;
  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getByText(expectedTitle);
  });
});

test("renders the ErrorMessage when page data is NOT successfully returned", async () => {
  const nonExistentId = 0;
  let mock = new MockAdapter(axios);
  mock
    .onGet(`${config.backendUrl}/projects/${nonExistentId}/search/`)
    .reply(401);

  render(
    <MemoryRouter initialEntries={[`/projects/${nonExistentId}/components`]}>
      <GlobalStateProvider>
        <Routes>
          <Route
            path="projects/:id/components"
            element={<ProjectComponents />}
          />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );

  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getByText("Error loading system components");
    // checks that ErrorMessage component has rendered
    const errorMessage = screen.getByTestId("error_message");
    expect(within(errorMessage).getByRole("heading")).toHaveTextContent(
      "Error"
    );
  });
});
