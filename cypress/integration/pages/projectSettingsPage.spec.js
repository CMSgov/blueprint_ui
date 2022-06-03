/// <reference types="cypress" />

import project from "../../fixtures/project.json";

describe("project settings page", () => {
  it("displays the project's settings for a project that exists", () => {
    // set up project mock data to return when api is called
    cy.fixture("project")
      .as("projectData")
      .then((projectData) => {
        const projectApiUrl = "/api/projects/" + projectData.id;
        cy.intercept("GET", projectApiUrl, projectData).as("getProjectData");
      });

    // reference fixture as existing project and visit the url for that project
    cy.get("@projectData").then((projectData) => {
      cy.visit(
        Cypress.env("BASE_URL") + `/projects/${projectData.id}/settings`
      );
    });

    cy.wait("@getProjectData");

    // check header
    const expectedProjectTitleAcronym = `${project.title} (${project.acronym})`;
    cy.get('[data-testid="project_header_title_acronym"]').should(
      "have.text",
      expectedProjectTitleAcronym
    );
    const expectedPageSubtitle = "Project Settings";
    cy.get('[data-testid="project_header_subtitle"]').should(
      "have.text",
      expectedPageSubtitle
    );

    // check detailed project settings
    const expectedLocation = project.location;
    cy.get('[data-testid="project_details_location"]').should(
      "contain.text",
      expectedLocation
    );
    const expectedImpactLevel = project.impact_level;
    cy.get('[data-testid="project_details_impact_level"]').should(
      "contain.text",
      expectedImpactLevel
    );

    // we can use this for end to end testing
    cy.get("@getProjectData").its("response.body").should("deep.equal", {
      id: 1,
      acronym: "TP",
      impact_level: "Low",
      location: "CMS AWS Commercial East-West",
      title: "Test Project",
    });
  });

  it("displays an error when project does not exist", () => {
    const nonexistentProjectId = 9999;
    cy.visit(
      Cypress.env("BASE_URL") + `/projects/${nonexistentProjectId}/settings`
    );

    const expectedErrorHeader = "Error";
    cy.get('[data-testid="error_message"]').should(
      "contain.text",
      expectedErrorHeader
    );
  });
});
