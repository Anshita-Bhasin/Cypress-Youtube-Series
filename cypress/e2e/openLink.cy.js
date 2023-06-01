describe(' Open link in same tab ', () => {

    it(' Approach1 - Remove target attribute', () => {
        cy.visit('https://wordcounter.net/')
        cy.get('').type('Test automation using Cypress')
    })

})