/// <reference types="cypress" />
/* eslint-disable cypress/no-unnecessary-waiting */

describe("Testing out project pages display header footer and breadcrumbs and other specific parts", () => {
  let projectName = "Cypress Created Project " + Date.now();
  let projectUrl = "";
  it("Starting from the home page, create a new project happy path, and verify the project specific pages", () => {
    cy.visit(Cypress.env("BASE_URL"));
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("not.exist");
    cy.get("h1").contains("Welcome to Blueprint for CMS");
    cy.get(".usa-process-list").should("exist");
    cy.get("footer").should("exist");
    cy.get(".usa-button").contains("Get started now").should("exist").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/project-setup");
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("project setup");
    cy.get("h1").should("exist").contains("Tell us a little about this system");
    cy.get("footer").should("exist");

    cy.get("#project-full-name").focus().type(projectName);
    cy.get("#project-acronym").focus().type("CCP");
    cy.get("#radio-location-cms-aws-east-west")
      .check({ force: true })
      .should("be.checked");
    cy.get("#radio-fisma-low").check({ force: true }).should("be.checked");
    cy.contains("Next").click();
    cy.get(".usa-input--success").should("exist");
    cy.wait(3000);
    cy.url().should(
      "contain",
      Cypress.env("BASE_URL") + "/project-setup/confirmation"
    );
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("project setup");
    cy.get(".usa-breadcrumb").contains("confirmation");
    cy.get("h1").should("exist").contains("Inherited policies and procedures");
    cy.get("footer").should("exist");
    cy.get(".usa-list").contains(/ociso/i);
    cy.get(".usa-list").contains(/aws/i);
    cy.contains("Next").click();
    cy.url().should(
      "contain",
      Cypress.env("BASE_URL") + "/project-setup/confirmation/select-components"
    );
    cy.wait(3000);
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("project setup");
    cy.get(".usa-breadcrumb").contains("confirmation");
    cy.get(".usa-breadcrumb").contains("select components");
    cy.get("h1")
      .should("exist")
      .contains("Select components for your system technologies");
    cy.get("footer").should("exist");
    cy.wait(3000);
    cy.get(".usa-table")
      .contains(/blueprint/i)
      .should("exist");
    //@TODO: next two lines will be fixed with jira ticket ISPGBSS-1158
    // cy.get(".usa-table").contains(/ociso/i).should("not.exist");
    // cy.get(".usa-table").contains(/aws/i).should("not.exist");
    // Expecting a new page to be added in the future, it will go here
    cy.contains("Confirm").click();
    cy.wait(3000);
    cy.url().should("contain", Cypress.env("BASE_URL") + "/projects");
    cy.get("h1").should("exist").contains(projectName);
    //set the project url to a variable for use in later test
    cy.url().then(($url) => {
      projectUrl = $url;
    });
  });

  it("navigating project pages after project is setup", () => {
    cy.visit(projectUrl);
    cy.wait(3000);
    cy.get("h1").should("exist").contains(projectName);
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("projects");
    cy.get(".usa-breadcrumb").contains(projectName);
    cy.get("#project_header_impact_level").contains("FISMA Impact Level: low");
    cy.get("header").should("exist");
    cy.get("footer").should("exist");
    cy.get(".gear-link").should("exist").click();
    cy.wait(3000);
    cy.get("header").should("exist");
    cy.get("footer").should("exist");
    cy.get("h1").should("exist").contains(projectName);
    cy.get("h2").should("exist").contains("Project Settings");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("projects");
    cy.get(".usa-breadcrumb").contains("settings");
    cy.get(".usa-breadcrumb").contains(projectName).click();
    cy.wait(3000);
    cy.get(".usa-button").contains("Manage System Components").click();
    cy.wait(3000);
    cy.get("header").should("exist");
    cy.get("footer").should("exist");
    cy.get("h1").should("exist").contains(projectName);
    cy.get("h2").should("exist").contains("System Components");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("projects");
    cy.get(".usa-breadcrumb").contains("components");
    cy.get(".usa-breadcrumb").contains(projectName).click();
    cy.wait(3000);
    cy.get(".usa-button").contains("Export Control Narratives").click();
    cy.wait(3000);
    cy.get("header").should("exist");
    cy.get("footer").should("exist");
    cy.get("h1").should("exist").contains(projectName);
    cy.get("h2").should("exist").contains("System Security Plan Summary");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("projects");
    cy.get(".usa-breadcrumb").contains(projectName);
    cy.get(".usa-breadcrumb").contains("system security plan");
    cy.get(".gear-link").should("exist");
  });

  it("testing individual control page", () => {
    cy.visit(projectUrl + "/controls/ac-1/");
    cy.wait(3000);
    cy.get("header").should("exist");
    cy.get("footer").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("projects");
    cy.get(".usa-breadcrumb").contains(projectName);
    cy.get(".usa-breadcrumb").contains("controls");
    cy.get(".usa-breadcrumb").contains("ac 1");
  });

  it("Starting from the home page, select a project and confirm sub pages and navigation between them", () => {
    cy.visit(Cypress.env("BASE_URL"));
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("not.exist");
    cy.get("h1").contains("Welcome to Blueprint for CMS");
    cy.get(".usa-process-list").should("exist");
    cy.get("footer").should("exist");
    cy.get("header").contains("Projects").should("exist").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/projects");
    cy.wait(3000);
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("projects");
    cy.get("footer").should("exist");
    cy.get("h1").should("exist").contains("projects", { matchCase: false });
    cy.wait(3000);
    cy.get(".usa-button").contains("View Project").click();
    cy.wait(3000);
    cy.url().should("contain", Cypress.env("BASE_URL") + "/projects");
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("projects");
    cy.get("footer").should("exist");
    cy.get("h1").should("exist");
  });
});
