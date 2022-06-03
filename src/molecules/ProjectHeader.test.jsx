import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectHeader from "./ProjectHeader";

test("Project Header renders with acronym, subtitle, and title", () => {
  const projectData = {
    id: 1,
    acronym: "MAP",
    title: "Most Awesomest Project",
    subtitle: "Project Settings",
  };

  render(
    <MemoryRouter>
      <ProjectHeader
        id={projectData.id}
        acronym={projectData.acronym}
        subtitle={projectData.subtitle}
        title={projectData.title}
      />
    </MemoryRouter>
  );

  const expectedProjectName = `${projectData.title} (${projectData.acronym})`;
  const expectedSubtitle = projectData.subtitle;

  expect(screen.getByTestId("project_header_title_acronym")).toHaveTextContent(
    expectedProjectName
  );
  expect(screen.getByTestId("project_header_subtitle")).toHaveTextContent(
    expectedSubtitle
  );
});

test("project name links to project homepage", () => {
  const projectData = {
    id: 1,
    acronym: "MAP",
    title: "Most Awesomest Project",
  };

  render(
    <MemoryRouter>
      <ProjectHeader
        id={projectData.id}
        acronym={projectData.acronym}
        subtitle={projectData.subtitle}
        title={projectData.title}
      />
    </MemoryRouter>
  );

  const projectName = `${projectData.title} (${projectData.acronym})`;
  const projectHomepageUrl = `/projects/${projectData.id}`;
  const linkElement = screen.getByRole("link", { name: projectName });
  expect(linkElement).toHaveAttribute("href", projectHomepageUrl);
});
