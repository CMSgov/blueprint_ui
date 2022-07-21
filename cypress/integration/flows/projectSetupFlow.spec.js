/// <reference types="cypress" />

describe("Testing out project pages", () => {
  it("Starting from the home page, create a new project happy path, and verify the project specific pages", () => {
    cy.visit(Cypress.env("BASE_URL"));
    cy.get(".usa-button").contains("Get started now").should("exist").click();
    cy.url().should("contain", Cypress.env("BASE_URL") + "/project-setup");
    cy.get("#project-full-name").focus().type("Cypress Created Project");
    cy.get("#project-acronym").focus().type("CCP");
    cy.get("#radio-location-cms-aws-govcloud")
      .check({ force: true })
      .should("be.checked");
    cy.get("#radio-fisma-low").check({ force: true }).should("be.checked");
    cy.contains("Next").click();
    // // @TODO:  testing Ajax calls then page change

    // cy.get(".usa-input--success").should("exist");
    // cy.route('POST', Cypress.env("BASE_URL")+':8000/api/projects/').as('project-create');
    // cy.wait('@project-create').should('have.property', 'status', 200);
    // // after redirect finishes
    // cy.url().should(
    //     'contain',
    //     Cypress.env("BASE_URL")+"/project-setup/confirmation"
    // );
    // // @TODO: test the ajax call gets the project that was created and has default components
    // cy.get(".usa-list").contains(/ociso/i);
    // cy.get(".usa-list").contains(/aws/i);
    // cy.contains("Next").click();
    // cy.url().should(
    //     'contain',
    //     Cypress.env("BASE_URL")+"/project-setup/confirmation/select-components"
    // );
    // // @TODO: test the ajax call gets the components not in the project
    // cy.get(".usa-table").contains(/blueprint/i).should("exist");
    // cy.get(".usa-table").contains(/ociso/i).should("not.exist");
    // cy.get(".usa-table").contains(/aws/i).should("not.exist");
    // cy.contains("Confirm").click();
    // cy.url().should(
    //     'contain',
    //     Cypress.env("BASE_URL")+"/projects"
    // );
  });
});
