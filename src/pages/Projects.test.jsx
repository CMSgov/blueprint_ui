import { MemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import Projects from "./Projects";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import config from "../config";
import { AuthProvider } from "../AuthContext";

test("renders the ProjectTemplate page when projects data is successfully returned", async () => {
  const projectsData = [
    {
      title: "Test Project 1",
      acronym: "TP1",
      id: 1,
    },
    {
      title: "Test Project 2",
      acronym: "TP2",
      id: 2,
    },
  ];

  let mock = new MockAdapter(axios);
  mock.onGet(`${config.backendUrl}/projects/`).reply(200, projectsData);

  render(
    <MemoryRouter>
      <AuthProvider>
        <Projects />
      </AuthProvider>
    </MemoryRouter>
  );

  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getByText(`You have access to ${projectsData.length} project(s).`);
    // checks that project template has rendered
    const projectTemplate = screen.getByTestId("projects_page");
    expect(within(projectTemplate).getByRole("heading")).toHaveTextContent(
      "Projects"
    );
  });
});

test("renders the ErrorMessage when projects data is NOT successfully returned", async () => {
  let mock = new MockAdapter(axios);
  mock.onGet(`${config.backendUrl}/projects/`).reply(401);

  render(
    <MemoryRouter>
      <AuthProvider>
        <Projects />
      </AuthProvider>
    </MemoryRouter>
  );

  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getByText(`Error loading projects`);
    // checks that ErrorMessage component has rendered
    const errorMessage = screen.getByTestId("error_message");
    expect(within(errorMessage).getByRole("heading")).toHaveTextContent(
      "Error"
    );
  });
});
