describe('Opening of new tab in Cypress', () => {
    beforeEach(function () {
        cy.visit('https://selectorshub.com/xpath-practice-page/')
    })

    it('Open new tab in Cypress - Approach1', () => {
        cy.contains('User Role').invoke('removeAttr', 'target').click()
    })

    it('Open new tab - Approach2', () => {
        cy.contains('Course Link').invoke("attr", "target", "_self").click()
    })

})