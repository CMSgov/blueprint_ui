/// <reference types="cypress" />
/* eslint-disable cypress/no-unnecessary-waiting */

describe("Testing out component library pages", () => {
  it("Starting from the home page, create a new project happy path, and verify the project specific pages", () => {
    cy.visit(Cypress.env("BASE_URL"));
    cy.get(".usa-navbar").should("exist").contains("Component Library").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/components");
    cy.wait(3000); // @TODO: improve wait ability
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("components");
    cy.get("h1").contains("Component Library");
    cy.get("footer").should("exist");
    cy.get(".usa-table").contains("OCISO", { matchCase: false });
    cy.get('[data-testid="textInput"]')
      .should("exist")
      .focus()
      .type("OCISO")
      .click();
    cy.wait(3000); // @TODO: improve wait ability
    cy.get(".usa-button").contains("Search").click();
    cy.wait(3000); // @TODO: improve wait ability
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
    cy.visit(Cypress.env("BASE_URL") + "/components?type=software");
    cy.wait(3000); // @TODO: improve wait ability
    cy.get("#software-filter").should("be.checked");
    cy.visit(Cypress.env("BASE_URL") + "/components?type=policy&type=software");
    cy.wait(3000); // @TODO: improve wait ability
    cy.get("#software-filter").should("be.checked");
    cy.get("#policy-filter").should("be.checked");
  });

  it("Testing filters remain after search. Will fail if db does not have policy and software type components.", () => {
    cy.visit(Cypress.env("BASE_URL") + "/components?type=software");
    cy.wait(3000); // @TODO: improve wait ability
    cy.get("#software-filter").should("be.checked");
    cy.get('[data-testid="textInput"]')
      .should("exist")
      .focus()
      .type("OCISO")
      .click();
    cy.wait(3000); // @TODO: improve wait ability
    cy.get("#software-filter").should("be.checked");
    cy.get(".usa-table").contains("OCISO", { matchCase: false }).click();
  });
});
