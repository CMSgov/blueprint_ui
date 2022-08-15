/// <reference types="cypress" />

describe("Testing out project pages display header footer and breadcrumbs and other specific parts", () => {
  it("empty form errors", () => {
    cy.visit(Cypress.env("BASE_URL") + "/project-setup");
    cy.get(".usa-error-message").should("not.exist");
    cy.get(".usa-input--error").should("not.exist");
    cy.contains("Next").click();
    cy.get(".usa-error-message")
      .should("exist")
      .contains("This field is required.");
    cy.get(".usa-error-message").contains("A selection is required.");
    cy.get(".usa-input--error").should("exist");
  });
  let projectName = "Cypress Created Project " + Date.now();
  let projectUrl = "";
  let projectId = "";
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
    cy.intercept("POST", Cypress.env("API_URL") + "/projects/").as(
      "projectCreate"
    );
    cy.contains("Next").click();
    cy.get(".usa-input--success").should("exist");
    cy.get(".usa-error-message").should("not.exist");
    cy.get(".usa-input--error").should("not.exist");
    cy.wait("@projectCreate")
      .its("response")
      .then((response) => {
        projectId = response.body["id"];
      });
    // cy.intercept('GET', Cypress.env("API_URL")+'/projects/'+projectId+'/').as('getProject');// projectId not set
    cy.intercept("GET", Cypress.env("API_URL") + "/projects/**/").as(
      "getProject"
    );
    cy.url().should(
      "contain",
      Cypress.env("BASE_URL") + "/project-setup/confirmation"
    );
    cy.wait("@getProject").its("response.statusCode").should("eq", 200);
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("project setup");
    cy.get(".usa-breadcrumb").contains("confirmation");
    cy.get("h1").should("exist").contains("Inherited policies and procedures");
    cy.get("footer").should("exist");
    cy.get(".usa-list").contains(/ociso/i);
    cy.get(".usa-list").contains(/aws/i);
    // cy.intercept('GET', Cypress.env("API_URL") + '/projects/'+projectId+'/components-not-added/').as('componentList');// projectId not set
    cy.intercept(
      "GET",
      Cypress.env("API_URL") + "/projects/**/components-not-added/"
    ).as("componentList");
    cy.contains("Next").click();
    cy.url().should(
      "contain",
      Cypress.env("BASE_URL") + "/project-setup/confirmation/select-components"
    );
    cy.wait("@componentList").its("response.statusCode").should("eq", 200);
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("project setup");
    cy.get(".usa-breadcrumb").contains("confirmation");
    cy.get(".usa-breadcrumb").contains("select components");
    cy.get("h1")
      .should("exist")
      .contains("Select components for your system technologies");
    cy.get("footer").should("exist");
    cy.get(".usa-table")
      .contains(/blueprint/i)
      .should("exist");
    cy.get(".usa-table").contains(/ociso/i).should("not.exist");
    cy.get(".usa-table").contains(/aws/i).should("not.exist");
    // Expecting a new page to be added in the future, it will go here
    // cy.intercept('GET', Cypress.env("API_URL") + '/projects/'+projectId).as('projectPage');
    cy.intercept("GET", Cypress.env("API_URL") + "/projects/*").as(
      "projectPage"
    );
    cy.contains("Confirm").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/projects/");
    cy.wait("@projectPage").its("response.statusCode").should("eq", 200);
    cy.get("h1").should("exist").contains(projectName);
    //set the project url to a variable for use in later test
    cy.url().then(($url) => {
      projectUrl = $url;
    });
  });

  it("navigating project pages after project is setup", () => {
    cy.intercept("GET", Cypress.env("API_URL") + "/projects/*").as(
      "projectData"
    );
    cy.visit(projectUrl);
    cy.wait("@projectData").its("response.statusCode").should("eq", 200);
    cy.get("h1").should("exist").contains(projectName);
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("projects");
    cy.get(".usa-breadcrumb").contains(projectName);
    cy.get("#project_header_impact_level").contains("FISMA Impact Level: low");
    cy.get("header").should("exist");
    cy.get("footer").should("exist");
    cy.get(".gear-link").should("exist").click();
    // load project settings page
    cy.url().should("contain", projectUrl + "/settings");
    // cy.wait('@projectData').its('response.statusCode').should('eq', 200);
    cy.get("header").should("exist");
    cy.get("footer").should("exist");
    cy.get("h1").should("exist").contains(projectName);
    cy.get("h2").should("exist").contains("Project Settings");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("projects");
    cy.get(".usa-breadcrumb").contains("settings");
    cy.get(".usa-breadcrumb").contains(projectName).click();
    // load project page
    cy.url().should("contain", projectUrl);
    cy.wait("@projectData").its("response.statusCode").should("eq", 200);
    cy.intercept("GET", Cypress.env("API_URL") + "/projects/**/search/").as(
      "projectComponentsData"
    );
    cy.get(".usa-button").contains("Manage System Components").click();
    // load project components page
    cy.url().should("contain", projectUrl + "/components");
    cy.wait("@projectComponentsData")
      .its("response.statusCode")
      .should("eq", 200);
    cy.get("header").should("exist");
    cy.get("footer").should("exist");
    cy.get("h1").should("exist").contains(projectName);
    cy.get("h2").should("exist").contains("System Components");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("projects");
    cy.get(".usa-breadcrumb").contains("components");
    cy.get(".usa-breadcrumb").contains(projectName).click();
    // load project page
    cy.url().should("contain", projectUrl);
    cy.wait("@projectData").its("response.statusCode").should("eq", 200);
    cy.get(".usa-button").contains("Export Control Narratives").click();
    // load project ssp page
    cy.url().should("contain", projectUrl + "/system-security-plan");
    cy.wait("@projectData").its("response.statusCode").should("eq", 200);
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
    cy.intercept("GET", Cypress.env("API_URL") + "/projects/*").as(
      "projectData"
    );
    cy.visit(projectUrl + "/controls/ac-1/");
    cy.wait("@projectData").its("response.statusCode").should("eq", 200);
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
    cy.intercept("GET", Cypress.env("API_URL") + "/projects/").as(
      "projectsData"
    );
    cy.get("header").contains("Projects").should("exist").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/projects");
    cy.wait("@projectsData").its("response.statusCode").should("eq", 200);
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("projects");
    cy.get("footer").should("exist");
    cy.get("h1").should("exist").contains("projects", { matchCase: false });
    cy.intercept("GET", Cypress.env("API_URL") + "/projects/*").as(
      "projectData"
    );
    cy.get(".usa-button").contains("View Project").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/projects");
    cy.wait("@projectData").its("response.statusCode").should("eq", 200);
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("projects");
    cy.get("footer").should("exist");
    cy.get("h1").should("exist");
  });
});
