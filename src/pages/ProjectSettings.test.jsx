// @TODO This test file is a work in progress
// The jest mock works to correctly handle setting url params that the component will use
// The fetch mocking is not yet working

import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectSettings from "./ProjectSettings";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "12",
  }),
}));

const projectData = {
  title: "Test Project",
  acronym: "TP",
  id: 1,
};

global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

test.skip("Project Settings page renders with title", async () => {
  fetch.mockImplementationOnce(() =>
    Promise.resolve({ json: () => Promise.resolve(projectData) })
  );

  render(
    <MemoryRouter>
      <ProjectSettings />
    </MemoryRouter>
  );

  //   await waitFor(() => screen.getByText("Project Settings"));
  expect(screen.getByRole("heading")).toHaveTextContent("Project Settings");
});
