/// <reference types="cypress" />
/* eslint-disable cypress/no-unnecessary-waiting */

describe("breadcrumbs & h1 show correctly on home page", () => {
  it("does not display on home page", () => {
    cy.visit(Cypress.env("BASE_URL"));
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("not.exist");
    cy.get("h1").contains("Welcome to Blueprint for CMS");
    cy.get(".usa-process-list").should("exist");
    cy.get("footer").should("exist");
  });
});

describe("breadcrumbs & h1 show correctly on healthcheck page", () => {
  it("does display on healthcheck page", () => {
    cy.visit(Cypress.env("BASE_URL") + "/healthcheck");
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("healthcheck");
    cy.get("h1").contains("Api healthcheck status");
    cy.get("footer").should("exist");
    cy.get("h1").contains("200");
  });
});

describe("breadcrumbs show correctly on projects not found page", () => {
  it("does display on project not found page", () => {
    cy.visit(Cypress.env("BASE_URL") + "/projects/0");
    cy.wait(3000);
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("projects");
    cy.get("h1").should("exist").contains("Error");
    cy.get('[data-testid="error_message"]')
      .should("exist")
      .contains("Error loading project");
    cy.get("footer").should("exist");
  });
});
