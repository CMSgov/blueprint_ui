import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectHeader from "./ProjectHeader";

test("Project Header renders with acronym, impact level, title, and subtitle", () => {
  const projectData = {
    id: 1,
    acronym: "MAP",
    impactLevel: "Low",
    subtitle: "Project Settings",
    title: "Most Awesomest Project",
  };

  render(
    <MemoryRouter>
      <ProjectHeader
        id={projectData.id}
        acronym={projectData.acronym}
        impactLevel={projectData.impactLevel}
        subtitle={projectData.subtitle}
        title={projectData.title}
      />
    </MemoryRouter>
  );

  const expectedProjectName = `${projectData.title} (${projectData.acronym})`;
  const expectedSubtitle = projectData.subtitle;
  const expectedImpactLevelText = `FISMA Impact Level: ${projectData.impactLevel}`;

  expect(screen.getByTestId("project_header_title_acronym")).toHaveTextContent(
    expectedProjectName
  );
  expect(screen.getByTestId("project_header_subtitle")).toHaveTextContent(
    expectedSubtitle
  );
  expect(screen.getByTestId("project_header_impact_level")).toHaveTextContent(
    expectedImpactLevelText
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
        title={projectData.title}
      />
    </MemoryRouter>
  );

  const projectName = `${projectData.title} (${projectData.acronym})`;
  const projectHomepageUrl = `/projects/${projectData.id}`;
  const linkElement = screen.getByRole("link", { name: projectName });
  expect(linkElement).toHaveAttribute("href", projectHomepageUrl);
});

test("gear icon next to impact level links to project settings page", () => {
  const projectData = {
    id: 1,
    acronym: "MAP",
    impactLevel: "Low",
    title: "Most Awesomest Project",
  };

  render(
    <MemoryRouter>
      <ProjectHeader
        id={projectData.id}
        acronym={projectData.acronym}
        impactLevel={projectData.impactLevel}
        title={projectData.title}
      />
    </MemoryRouter>
  );

  const projectSettingsUrl = `/projects/${projectData.id}/settings`;
  const linkElement = screen.getByTestId("gear_link");
  expect(linkElement).toHaveAttribute("href", projectSettingsUrl);
});
