/// <reference types="cypress" />

describe("Testing out component library pages", () => {
  it("Starting from the home page, create a new project happy path, and verify the project specific pages", () => {
    cy.visit(Cypress.env("BASE_URL"));
    cy.intercept("GET", Cypress.env("API_URL") + "/components/search/").as(
      "initialLoad"
    );
    cy.get(".usa-navbar").should("exist").contains("Component Library").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/components");
    cy.wait("@initialLoad").its("response.statusCode").should("eq", 200);
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("components");
    cy.get("h1").contains("Component Library");
    cy.get("footer").should("exist");
    cy.get(".usa-table").contains("OCISO", { matchCase: false });
    cy.intercept(
      "GET",
      Cypress.env("API_URL") + "/components/search/?search=OCISO"
    ).as("search");
    cy.get('[data-testid="textInput"]').should("exist").focus().type("OCISO");
    cy.get(".usa-button").contains("Search").click();
    cy.wait("@search").its("response.statusCode").should("eq", 200);
    cy.get(".usa-table").contains("OCISO", { matchCase: false }).click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/components/");
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("components");
    cy.get(".usa-breadcrumb").contains("OCISO", { matchCase: false });
    cy.get("h1").contains("OCISO Inheritable Controls", { matchCase: false });
    cy.get("footer").should("exist");
  });

  it("Testing filters in url check correct values. Will fail if db does not have policy and software type components.", () => {
    cy.intercept(
      "GET",
      Cypress.env("API_URL") + "/components/search/?type=software"
    ).as("initialLoad");
    cy.visit(Cypress.env("BASE_URL") + "/components?type=software");
    cy.wait("@initialLoad").its("response.statusCode").should("eq", 200);
    cy.get("#software-filter").should("be.checked");
    cy.intercept(
      "GET",
      Cypress.env("API_URL") + "/components/search/?type=policy&type=software"
    ).as("secondLoad");
    cy.visit(Cypress.env("BASE_URL") + "/components?type=policy&type=software");
    cy.wait("@secondLoad").its("response.statusCode").should("eq", 200);
    cy.get("#software-filter").should("be.checked");
    cy.get("#policy-filter").should("be.checked");
  });

  it("Testing filters remain after search. Will fail if db does not have policy and software type components.", () => {
    cy.intercept(
      "GET",
      Cypress.env("API_URL") + "/components/search/?type=software"
    ).as("initialLoad");
    cy.visit(Cypress.env("BASE_URL") + "/components?type=software");
    cy.wait("@initialLoad").its("response.statusCode").should("eq", 200);
    cy.get("#software-filter").should("be.checked");
    cy.intercept(
      "GET",
      Cypress.env("API_URL") + "/components/search/?type=software&search=OCISO"
    ).as("secondLoad");
    cy.get('[data-testid="textInput"]').should("exist").focus().type("OCISO");
    cy.get(".usa-button").contains("Search").click();
    cy.wait("@secondLoad").its("response.statusCode").should("eq", 200);
    cy.get("#software-filter").should("be.checked");
    cy.intercept("GET", Cypress.env("API_URL") + "/components/*").as(
      "componentAjax"
    );
    cy.get(".usa-table").contains("OCISO", { matchCase: false }).click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/components/");
    cy.wait("@componentAjax").its("response.statusCode").should("eq", 200);
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("components");
    cy.get(".usa-breadcrumb").contains("OCISO", { matchCase: false });
    cy.get("h1").contains("OCISO Inheritable Controls", { matchCase: false });
  });
});
