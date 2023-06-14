describe("Press Enter Key", () => {
    it("use the {enter} character to type text ", () => {
        cy.visit('https://www.google.com')
        cy.get('textarea[type="Search"]')
        .type('Cypress Tips And Tricks {enter}')

    });


});