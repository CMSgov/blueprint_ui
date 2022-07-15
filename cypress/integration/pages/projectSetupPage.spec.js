/// <reference types="cypress" />
describe("project setup page form testing", () => {
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

  it("filling out form and click next", () => {
    cy.visit(Cypress.env("BASE_URL") + "/project-setup");
    cy.get("#project-full-name").focus().type("Cypress Test Project Creation");
    cy.get("#project-acronym").focus().type("CTPC");
    cy.get("#radio-location-cms-aws-govcloud")
      .check({ force: true })
      .should("be.checked");
    cy.get("#radio-fisma-low").check({ force: true }).should("be.checked");
    cy.contains("Next").click();
    cy.get(".usa-error-message").should("not.exist");
    cy.get(".usa-input--error").should("not.exist");
  });
});
