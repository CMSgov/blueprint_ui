import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectsTemplate from "./ProjectsTemplate";

test("Projects page displays text for 0 projects when NO projects prop is passed in", () => {
  render(
    <MemoryRouter>
      <ProjectsTemplate />
    </MemoryRouter>
  );

  const expectedProjectsText = `You have access to 0 project(s).`;
  screen.getByText(expectedProjectsText);
});

test("Projects page displays text for correct number of projects", () => {
  const projects = [
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

  render(
    <MemoryRouter>
      <ProjectsTemplate projects={projects} />
    </MemoryRouter>
  );

  const expectedProjectsText = `You have access to ${projects.length} project(s).`;
  screen.getByText(expectedProjectsText);
  expect(screen.getByRole("heading")).toHaveTextContent("Projects");
});

test("Projects page displays project card for each project", () => {
  const projects = [
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

  render(
    <MemoryRouter>
      <ProjectsTemplate projects={projects} />
    </MemoryRouter>
  );

  const project1CardText = projects[0].title;
  const project2CardText = projects[1].title;

  const cards = screen.queryAllByTestId("project_card");
  expect(cards[0]).toHaveTextContent(project1CardText);
  expect(cards[1]).toHaveTextContent(project2CardText);
});
