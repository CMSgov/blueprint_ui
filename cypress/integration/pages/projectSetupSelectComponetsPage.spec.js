/// <reference types="cypress" />
describe("breadcrumbs show correctly on project setup select components page", () => {
  it("does display on project setup select components page", () => {
    cy.visit(
      Cypress.env("BASE_URL") + "/project-setup/confirmation/select-components"
    );
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("project setup");
    cy.get(".usa-breadcrumb").contains("confirmation");
    cy.get(".usa-breadcrumb").contains("select components");
    cy.get("h1")
      .should("exist")
      .contains("Select components for your system technologies");
    cy.get("footer").should("exist");
  });
});
