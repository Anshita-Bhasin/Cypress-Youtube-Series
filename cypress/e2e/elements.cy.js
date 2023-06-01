describe(' Cypress Examples', () => {

  it('DOM Commands in Cypress', () => {

    cy.visit('https://naveenautomationlabs.com/opencart/')
    //  cy.get('.image').first().click()
    cy.get('.image').last().click()
    cy.get('.image').eq(1).click()


    cy.get('.swiper-wrapper').eq(1).find('>div').should('have.length', 10)
    cy.contains('Macbook').should('be.visible')
    cy.wrap({ foo: 'bar' }).its('foo').should('eq', 'bar') 
  })


})