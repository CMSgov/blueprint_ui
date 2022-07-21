/// <reference types="cypress" />

describe("Testing out links between static pages", () => {
  it("Starting from the home page, all the static page links work to navigate between them", () => {
    cy.visit(Cypress.env("BASE_URL"));
    cy.get("header").contains("Help").should("exist").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/help");
    cy.get(".usa-button").contains("Read the FAQs").should("exist").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/help/faq");
    cy.get(".usa-button").contains("Contact us").should("exist").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/help/contact-us");
    cy.get(".usa-breadcrumb").should("exist").contains("help").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/help");
    cy.get(".usa-button").contains("Contact us").should("exist").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/help/contact-us");
    cy.get("footer").contains("Blueprint Support").should("exist").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/help");
    cy.get(".usa-breadcrumb").should("exist").contains("Home").click();
  });
});
