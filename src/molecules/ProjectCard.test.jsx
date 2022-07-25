import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectCard from "./ProjectCard";

test("Project Card renders with project title and acronym", () => {
  const testProject = {
    id: 1,
    acronym: "MAP",
    title: "Most Awesomest Project",
  };

  render(
    <MemoryRouter>
      <ProjectCard project={testProject} />
    </MemoryRouter>
  );

  const card = screen.getByTestId("project_card");
  expect(card).toHaveTextContent(testProject.title);
  expect(card).toHaveTextContent(testProject.acronym);
});

test("Project Card renders with links to components, controls, and settings pages", () => {
  const testProject = {
    id: 1,
    acronym: "MAP",
    title: "Most Awesomest Project",
  };

  render(
    <MemoryRouter>
      <ProjectCard project={testProject} />
    </MemoryRouter>
  );

  const componentsUrl = `/projects/${testProject.id}/components`;
  const controlsUrl = `/projects/${testProject.id}/controls`;
  const settingsUrl = `/projects/${testProject.id}/settings`;
  const componentsElement = screen.getByRole("link", {
    name: "Manage Components",
  });
  const controlsElement = screen.getByRole("link", { name: "View Controls" });
  const settingsElement = screen.getByRole("link", { name: "View Settings" });
  expect(componentsElement).toHaveAttribute("href", componentsUrl);
  expect(controlsElement).toHaveAttribute("href", controlsUrl);
  expect(settingsElement).toHaveAttribute("href", settingsUrl);
});

test("View project button links to project homepage", () => {
  const testProject = {
    id: 1,
    acronym: "MAP",
    title: "Most Awesomest Project",
  };

  render(
    <MemoryRouter>
      <ProjectCard project={testProject} />
    </MemoryRouter>
  );

  const projectHomepageUrl = `/projects/${testProject.id}`;
  const linkElement = screen.getByRole("link", { name: "View Project" });
  expect(linkElement).toHaveAttribute("href", projectHomepageUrl);
});
