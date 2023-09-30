describe('Registration Flow',()=>{

    it('Enter the form details',()=>{
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
        cy.get('#input-firstname').type('Anshita')
        cy.get('#input-lastname').type('QA')
        cy.get('#input-email').type('abc.1234@dispostable.com')
        cy.get('#input-telephone').type('123456789')
        cy.get('#input-password').type('Cypress123!!')
        cy.get('#input-confirm').type('Cypress123!!')
        cy.get('input[type="radio"]').eq(1).check()
        cy.get('input[type="checkbox"]').check()
        cy.get('.btn.btn-primary').click()

        cy.contains('Your Account Has Been Created!').should('exist')

    })
})