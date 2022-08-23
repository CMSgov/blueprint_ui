/// <reference types="cypress" />

describe("Testing out links between static pages", () => {
  it("Starting from the home page, all the static page links work to navigate between them", () => {
    //login script start
    cy.visit(Cypress.env("BASE_URL"));
    cy.get("#username").focus().type(Cypress.env("username"));
    cy.get("#password").focus().type(Cypress.env("password"));
    cy.intercept("POST", Cypress.env("AUTH_URL")).as("login");
    cy.get(".usa-button").contains("Sign in").click();
    cy.wait("@login").its("response.statusCode").should("eq", 200);
    //login script end
    cy.visit(Cypress.env("BASE_URL"));
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("not.exist");
    cy.get("h1").contains("Welcome to Blueprint for CMS");
    cy.get(".usa-process-list").should("exist");
    cy.get("footer").should("exist");
    cy.get("header").contains("Help").should("exist").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/help");
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("help");
    cy.get("h1").contains("Help");
    cy.get("footer").should("exist");
    cy.get(".usa-button").contains("Read the FAQs").should("exist").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/help/faq");
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("help");
    cy.get(".usa-breadcrumb").contains("faq");
    cy.get("h1").contains("Frequently Asked Questions");
    cy.get("footer").should("exist");
    cy.get(".usa-button").contains("Contact us").should("exist").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/help/contact-us");
    cy.get("header").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("Home");
    cy.get(".usa-breadcrumb").contains("help");
    cy.get(".usa-breadcrumb").contains("contact us");
    cy.get("h1").contains("Contact Us");
    cy.get("footer").should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains("help").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/help");
    cy.get(".usa-button").contains("Contact us").should("exist").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/help/contact-us");
    cy.get("footer").contains("Blueprint Support").should("exist").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/help");
    cy.get(".usa-breadcrumb").should("exist").contains("Home").click();
  });
});
