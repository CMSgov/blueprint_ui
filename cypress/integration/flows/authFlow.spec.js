/// <reference types="cypress" />

describe("Testing out create user and login pages", () => {
  it("create-user", () => {
    cy.visit(Cypress.env("BASE_URL") + "/create-account");
    cy.get("#username").focus().type(Cypress.env("username"));
    cy.get("#password-create-account").focus().type(Cypress.env("password"));
    cy.get("#password-create-account-confirm")
      .focus()
      .type(Cypress.env("password"));
    cy.intercept("POST", Cypress.env("API_URL") + "/users/").as("create");
    cy.get(".usa-button").contains("Create account").click();
    // If this is your first run expect a 200
    //cy.wait("@create").its("response.statusCode").should("eq", 200);
    // If you have run this test before expect a 400
    cy.wait("@create").its("response.statusCode").should("eq", 400);
  });

  it("login", () => {
    cy.visit(Cypress.env("BASE_URL"));
    cy.get("#username").focus().type(Cypress.env("username"));
    cy.get("#password").focus().type(Cypress.env("password"));
    cy.intercept("POST", Cypress.env("AUTH_URL")).as("login");
    cy.get(".usa-button").contains("Sign in").click();
    cy.wait("@login").its("response.statusCode").should("eq", 200);
  });
});
