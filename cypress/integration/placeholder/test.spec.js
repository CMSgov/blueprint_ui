/// <reference types="cypress" />

// remove after adding first real test

describe("sample test on react default", () => {
  it("renders basic elements of react default page", () => {
    cy.visit(Cypress.env("BASE_URL"));
    cy.get(".usa-process-list").should("exist");
  });
});
