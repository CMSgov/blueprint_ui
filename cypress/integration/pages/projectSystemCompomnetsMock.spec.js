/// <reference types="cypress" />

import project from "../../fixtures/project.json";
import componentLibraryFresh from "../../fixtures/componentLibraryFresh.json";
import componentLibrarySearchWin from "../../fixtures/componentLibrarySearchWin.json";
import componentLibrarySearchWinTypePolicy from "../../fixtures/componentLibrarySearchWinTypePolicy.json";
import componentLibrarySearchWinTypeSoftwarePage1 from "../../fixtures/componentLibrarySearchWinTypeSoftwarePage1.json";
import componentLibrarySearchWinTypeSoftwarePage2 from "../../fixtures/componentLibrarySearchWinTypeSoftwarePage2.json";
describe("component library page", () => {
  it("fresh landing", () => {
    // set up mock data to return when api is called
    cy.fixture("componentLibraryFresh")
      .as("componentLibraryFreshData")
      .then((componentLibraryFreshData) => {
        const apiUrl = "/api/components/search/";
        cy.intercept("GET", apiUrl, componentLibraryFreshData).as(
          "getComponentLibraryFreshData"
        );
      });
    // reference fixture as existing project and visit the url for that project
    cy.get("@componentLibraryFreshData").then((componentLibraryFreshData) => {
      cy.visit(Cypress.env("BASE_URL") + `/component-library/`);
    });
    cy.wait("@getComponentLibraryFreshData");
    // check expected fields
    cy.get('[data-testid="textInput"]').should("exist");
    cy.get('[data-testid="checkbox"]').contains("Policy");
    cy.get('[data-testid="checkbox"]').contains("Service");
    cy.get('[data-testid="checkbox"]').contains("Software");
    cy.get('[data-testid="table"]').should("exist").contains("Component");
    cy.get('[data-testid="table"]').contains("Description");
    cy.get('[data-testid="table"]').contains("Controls");
    cy.get(".usa-pagination").should("exist").contains("Next");
  });

  it("searching successful hit", () => {
    // set up mock data to return when api is called
    cy.fixture("componentLibrarySearchWin")
      .as("componentLibrarySearchWinData")
      .then((componentLibrarySearchWinData) => {
        const apiUrl = "/api/components/search/?search=win";
        cy.intercept("GET", apiUrl, componentLibrarySearchWinData).as(
          "getComponentLibrarySearchWinData"
        );
      });
    // reference fixture as existing project and visit the url for that project
    cy.get("@componentLibrarySearchWinData").then(
      (componentLibrarySearchWinData) => {
        cy.visit(Cypress.env("BASE_URL") + `/component-library/?search=win`);
      }
    );
    cy.wait("@getComponentLibrarySearchWinData");
    // check expected fields
    cy.get('[data-testid="textInput"]').should("exist");
    cy.get('[data-testid="textInput"]')
      .invoke("attr", "placeholder")
      .should("contain", "win");
    cy.get('[data-testid="checkbox"]').contains("Policy");
    cy.get('[data-testid="checkbox"]').contains("Service");
    cy.get('[data-testid="checkbox"]').contains("Software");
    cy.get('[data-testid="table"]').should("exist").contains("Component");
    cy.get('[data-testid="table"]').contains("Description");
    cy.get('[data-testid="table"]').contains("Controls");
    cy.get(".usa-pagination").should("exist").contains("Next");
  });

  it("searching successful hit with filter short", () => {
    // set up mock data to return when api is called
    cy.fixture("componentLibrarySearchWinTypePolicy")
      .as("componentLibrarySearchWinTypePolicyData")
      .then((componentLibrarySearchWinTypePolicyData) => {
        const apiUrl = "/api/components/search/?search=win&type=policy";
        cy.intercept("GET", apiUrl, componentLibrarySearchWinTypePolicyData).as(
          "getComponentLibrarySearchWinTypePolicyData"
        );
      });
    // reference fixture as existing project and visit the url for that project
    cy.get("@componentLibrarySearchWinTypePolicyData").then(
      (componentLibrarySearchWinTypePolicyData) => {
        cy.visit(
          Cypress.env("BASE_URL") + `/component-library/?search=win&type=policy`
        );
      }
    );
    cy.wait("@getComponentLibrarySearchWinTypePolicyData");
    // check expected fields
    cy.get('[data-testid="textInput"]').should("exist");
    cy.get('[data-testid="textInput"]')
      .invoke("attr", "placeholder")
      .should("contain", "win");
    cy.get('[data-testid="checkbox"]').contains("Policy");
    cy.get('[data-testid="checkbox"]').contains("Service");
    cy.get('[data-testid="checkbox"]').contains("Software");
    cy.get('[data-testid="table"]').should("exist").contains("Component");
    cy.get('[data-testid="table"]').contains("Description");
    cy.get('[data-testid="table"]').contains("Controls");
    cy.get(".usa-pagination").should("not.exist");
  });

  it("searching successful hit with filter large page 1", () => {
    // set up mock data to return when api is called
    cy.fixture("componentLibrarySearchWinTypeSoftwarePage1")
      .as("componentLibrarySearchWinTypeSoftwarePage1Data")
      .then((componentLibrarySearchWinTypeSoftwarePage1Data) => {
        const apiUrl = "/api/components/search/?search=win&type=software";
        cy.intercept(
          "GET",
          apiUrl,
          componentLibrarySearchWinTypeSoftwarePage1Data
        ).as("getComponentLibrarySearchWinTypeSoftwarePage1Data");
      });
    // reference fixture as existing project and visit the url for that project
    cy.get("@componentLibrarySearchWinTypeSoftwarePage1Data").then(
      (componentLibrarySearchWinTypeSoftwarePage1Data) => {
        cy.visit(
          Cypress.env("BASE_URL") +
            `/component-library/?search=win&type=software`
        );
      }
    );
    cy.wait("@getComponentLibrarySearchWinTypeSoftwarePage1Data");
    // check expected fields
    cy.get('[data-testid="textInput"]').should("exist");
    cy.get('[data-testid="textInput"]')
      .invoke("attr", "placeholder")
      .should("contain", "win");
    cy.get('[data-testid="checkbox"]').contains("Policy");
    cy.get('[data-testid="checkbox"]').contains("Service");
    cy.get('[data-testid="checkbox"]').contains("Software");
    cy.get('[data-testid="table"]').should("exist").contains("Component");
    cy.get('[data-testid="table"]').contains("Description");
    cy.get('[data-testid="table"]').contains("Controls");
    cy.get(".usa-pagination").should("exist").contains("Next");
  });

  it("searching successful hit with filter large page 2", () => {
    // set up mock data to return when api is called
    cy.fixture("componentLibrarySearchWinTypeSoftwarePage2")
      .as("componentLibrarySearchWinTypeSoftwarePage2Data")
      .then((componentLibrarySearchWinTypeSoftwarePage2Data) => {
        const apiUrl =
          "/api/components/search/?search=win&type=software&page=2";
        cy.intercept(
          "GET",
          apiUrl,
          componentLibrarySearchWinTypeSoftwarePage2Data
        ).as("getComponentLibrarySearchWinTypeSoftwarePage2Data");
      });
    // reference fixture as existing project and visit the url for that project
    cy.get("@componentLibrarySearchWinTypeSoftwarePage2Data").then(
      (componentLibrarySearchWinTypeSoftwarePage2Data) => {
        cy.visit(
          Cypress.env("BASE_URL") +
            `/component-library/?search=win&type=software&page=2`
        );
      }
    );
    cy.wait("@getComponentLibrarySearchWinTypeSoftwarePage2Data");
    // check expected fields
    cy.get('[data-testid="textInput"]').should("exist");
    cy.get('[data-testid="textInput"]')
      .invoke("attr", "placeholder")
      .should("contain", "win");
    cy.get('[data-testid="checkbox"]').contains("Policy");
    cy.get('[data-testid="checkbox"]').contains("Service");
    cy.get('[data-testid="checkbox"]').contains("Software");
    cy.get('[data-testid="table"]').should("exist").contains("Component");
    cy.get('[data-testid="table"]').contains("Description");
    cy.get('[data-testid="table"]').contains("Controls");
    cy.get(".usa-pagination").should("exist").contains("Previous");
  });
});
