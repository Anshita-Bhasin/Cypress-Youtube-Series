describe('Handle Dropdown in Cypress', () => {

    it('Handle dropdown with select tag', () => {

        cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
        //cy.get('#select-demo').select('Wednesday')
        //cy.get('#select-demo').select(4).should('have.value','Wednesday')
       
        cy.get('#select-demo').select(4)
        cy.get('#select-demo option:selected').should('have.text','Wednesday')

    })
it ('Multi select drop down ',()=>{
    cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
    cy.get('#multi-select').select(['California', 'Texas','Washington'])
})

it('Dropdown without select tag',()=>{
    cy.visit('https://www.amazon.ae/')
    cy.get('#twotabsearchtextbox').type('iphone')
    cy.get('.left-pane-results-container').find('>div').contains('14 pro max case').click()
})

})