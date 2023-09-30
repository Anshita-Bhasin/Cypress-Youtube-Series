import loginData from '../fixtures/login.json'

Cypress.Commands.add('login', () => {
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    cy.get('[id="input-email"]').type(loginData.email);
    cy.get('[id="input-password"]').type(loginData.password);
    cy.get('[type="submit"]').eq(0).click();
})

Cypress.Commands.add('login', () => {
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    cy.get('[id="input-email"]').type("cypress.demo@dispostable.com");
    cy.get('[id="input-password"]').type("Cypress123!!");
    cy.get('[type="submit"]').eq(0).click();
})

