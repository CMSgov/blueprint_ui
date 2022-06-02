/// <reference types="cypress" />

describe("breadcrumbs & h1 show correctly on home page", () =>{
  it("does not display on home page", () => {
    cy.visit(Cypress.env("BASE_URL"));
    cy.get('header').should("exist");
    cy.get(".usa-breadcrumb").should("not.exist");
    cy.get('h1').contains('Welcome to Blueprint for CMS');
    cy.get(".usa-process-list").should("exist");
    cy.get('footer').should("exist");
  });
});

describe("breadcrumbs & h1 show correctly on help page", () =>{
  it("does display on help page", () => {
    cy.visit(Cypress.env("BASE_URL")+"/help");
    cy.get('header').should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains('Home');
    cy.get(".usa-breadcrumb").contains('help');
    cy.get('h1').contains('Help');
    cy.get('footer').should("exist");
  });
});

describe("breadcrumbs & h1 show correctly on faq page", () =>{
  it("does display on faq page", () => {
    cy.visit(Cypress.env("BASE_URL")+"/faq");
    cy.get('header').should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains('Home');
    cy.get(".usa-breadcrumb").contains('help');
    cy.get(".usa-breadcrumb").contains('faq');
    cy.get('h1').contains('Frequently Asked Questions');
    cy.get('footer').should("exist");
  });
});

describe("breadcrumbs & h1 show correctly on contact us page", () =>{
  it("does display on contact us page", () => {
    cy.visit(Cypress.env("BASE_URL")+"/contact-us");
    cy.get('header').should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains('Home');
    cy.get(".usa-breadcrumb").contains('help');
    cy.get(".usa-breadcrumb").contains('contact us');
    cy.get('h1').contains('Contact Us');
    cy.get('footer').should("exist");
  });
});

describe("breadcrumbs show correctly on projects page", () =>{
  it("does display on projects list page", () => {
    cy.visit(Cypress.env("BASE_URL")+"/projects");
    cy.get('header').should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains('Home');
    cy.get(".usa-breadcrumb").contains('projects');
    cy.get('footer').should("exist");
  });
});

describe("breadcrumbs show correctly on projects not found page", () =>{
  it("does display on project not found page", () => {
    cy.visit(Cypress.env("BASE_URL")+"/projects/0");
    cy.get('header').should("exist");
    cy.get(".usa-breadcrumb").should("exist").contains('Home');
    cy.get(".usa-breadcrumb").contains('projects');
    cy.get('h1').contains('Project not found');
    cy.get('footer').should("exist");
  });
});
