import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import Project from "./Project";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { config } from "../config";
import { GlobalStateProvider } from "../GlobalState";

const pageData = {
  title: "Test Project",
  acronym: "TP",
  id: 1,
};

test("renders the LoadingIcon when waiting for data, then renders the pageTemplate when page data is successfully returned", async () => {
  let mock = new MockAdapter(axios);
  mock
    .onGet(`${config.backendUrl}/projects/${pageData.id}/`)
    .reply(200, pageData);

  render(
    <MemoryRouter initialEntries={[`/projects/${pageData.id}`]}>
      <GlobalStateProvider>
        <Routes>
          <Route path="projects/:id" element={<Project />} />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );
  screen.getByTestId("loading_indicator");
  const expectedTitle = `${pageData.title} (${pageData.acronym})`;
  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getByText(expectedTitle);
  });
});

test("renders the ErrorMessage when page data is NOT successfully returned", async () => {
  const nonExistentId = 0;
  let mock = new MockAdapter(axios);
  mock.onGet(`${config.backendUrl}/projects/${nonExistentId}/`).reply(401);

  render(
    <MemoryRouter initialEntries={[`/projects/${nonExistentId}`]}>
      <GlobalStateProvider>
        <Routes>
          <Route path="projects/:id" element={<Project />} />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );

  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getByText("Error loading project");
    // checks that ErrorMessage component has rendered
    const errorMessage = screen.getByTestId("error_message");
    expect(within(errorMessage).getByRole("heading")).toHaveTextContent(
      "Error"
    );
  });
});
