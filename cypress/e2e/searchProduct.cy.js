
import loginDetails from '../fixtures/login.json'

describe("Website Login and Product Search", () => {
    it("should navigate to the website, log in, and search for 'Macbook'", () => {
        cy.login()
        cy.get('[name="search"]').eq(0).type("Macbook");
        cy.get('button.btn.btn-default.btn-lg').click();
        cy.contains("Macbook").should('be.visible');
    });
});
