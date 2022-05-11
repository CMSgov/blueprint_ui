/// <reference types="cypress" />

// remove after adding first real test

describe("sample test on react default", () => {
  it("renders basic elements of react default page", () => {
    cy.visit("http://localhost:3001");
    cy.get(".App-logo").should("exist");
  });
});
