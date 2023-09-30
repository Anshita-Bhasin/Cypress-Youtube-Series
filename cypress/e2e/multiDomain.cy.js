describe(' Cross Origin ', () => {

    it('Cross Origin', () => {
        cy.visit('https://www.propertyfinder.ae/')
        cy.get('a.social-links__list-item.social-links__list-item--twitter').invoke('removeAttr', 'target').click()
        cy.origin('https://twitter.com', () => {
            cy.get('span[data-testid="UserJoinDate"]').should('have.text', 'Joined May 2011')
        })
    })

})