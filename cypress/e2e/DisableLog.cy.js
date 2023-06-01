describe(' Disable Log in Cypress ', () => {
    it(' Disable Log in Cypress', () => {

        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
        cy.get('#input-firstname').type('Anshita',{log:false})
        cy.get('#input-lastname').type('QA')
        cy.get('#input-email').type('abc.1234@dispostable.com')
        cy.get('#input-telephone', { log: false }).type('123456789')
        cy.get('#input-password').type('Cypress123!!')
        cy.get('#input-confirm').type('Cypress123!!')
        cy.get('input[type="radio"]', { log: false }).eq(1).check()
        cy.get('input[type="checkbox"]').check()


    })


})